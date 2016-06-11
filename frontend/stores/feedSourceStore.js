var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var FeedSourceStore = new Store(AppDispatcher);
var FeedSourceConstants = require('../constants/feedSourceConstants');
var FeedItemConstants = require('../constants/feedItemConstants');
var UserConstants = require('../constants/userConstants');
var ApiActions = require('./../actions/apiActions');

var _feedSources = {};  // keys will be categories, values will be feed sources
var _feedSourcesById = {}; //feedsourceid => feedsource, there are special keys for todayFeeds and savedForLaterFeeds
var _feedSourcesNextPageById = {};
var _feedSourcesLoaded = false;
var _addingNewFeedSourceData = {
  addedFeedSource: false,
  payload: undefined };

var populate_feedSources = function(feedSources) {
  FeedSourceStore.getUniqueCategories(feedSources).forEach(function(category, idx_cat) {
    if (_feedSources[category] === undefined) {
      _feedSources[category] = [];
    }
    feedSources.forEach(function(feedSource, idx_fs) {
      if (feedSource.category === category) {
        _feedSources[category].push(feedSource);
      }
    });
  });
  _feedSourcesById[FeedItemConstants.TODAY_FEEDS_ID] = {title: FeedSourceConstants.RECENT_FEEDS_TITLE, id: FeedItemConstants.TODAY_FEEDS_ID};
  _feedSourcesById[FeedItemConstants.SAVED_FOR_LATER_FEEDS_ID] = {title: FeedSourceConstants.SAVED_FOR_LATER_FEEDS_TITLE, id: FeedItemConstants.SAVED_FOR_LATER_FEEDS_ID};
  feedSources.forEach(function(feedSource) {
    _feedSourcesById[feedSource.id] = feedSource;
    _feedSourcesNextPageById[feedSource.id] = 1;
  });
};

var updateFeedSources = function(feedSources) {
  if (_feedSources[category] === undefined) {

  }
};

FeedSourceStore.getFeedSourceById = function(id) {
  return _feedSourcesById[id];
},

FeedSourceStore.getFeedSourceNextPageById = function(id) {
  return _feedSourcesNextPageById[id];
},

FeedSourceStore.getUniqueCategories = function(feedSources) {
  var unique = [];

  feedSources.forEach(function(feedSource, idx) {
    if (unique.indexOf(feedSource.category) === -1) {
      unique.push(feedSource.category);
    }
  });

  return unique;
};

var addCreatedFeedSourceTo_feedSources = function(createdFeedSource) {
  var category = createdFeedSource.category;
  if (_feedSources[category] === undefined) {
    _feedSources[category] = [];
  }
  _feedSources[category].push(createdFeedSource);
};

FeedSourceStore.allFeedSources = function() {
  return _feedSourcesById;
};

FeedSourceStore.__onDispatch = function(payload) {
  switch (payload.actionType) {
    case FeedSourceConstants.RECEIVED_FEED_SOURCES:
      populate_feedSources(payload.feedSources);
      _feedSourcesLoaded = true;
      FeedSourceStore.__emitChange();
      break;
    case FeedItemConstants.RECEIVED_FEEDS:
      _feedSourcesNextPageById[payload.feedSourceId] += 1;
      break;
    case FeedItemConstants.RECEIVED_FEEDS_UPDATE:
      _feedSourcesNextPageById[payload.feedSourceId] += 1;
      break;
    case FeedItemConstants.ADDED_NEW_FEEDSOURCE:
      populate_feedSources(payload.feedSource);
      _feedSourcesNextPageById[payload.feedSourceId] += 1;
      _addingNewFeedSourceData.addedFeedSource = true;
      _addingNewFeedSourceData.payload = payload;
      FeedSourceStore.__emitChange();
      // window.setTimeout(function() {
      //   ApiActions.updateFeedItemStoreAfterAddedNewFeedSource(payload);
      // }, 1000);
      break;
    // case FeedItemConstants.RECEIVED_INITIAL_DATA:
    //   populate_feedSources(payload.initialData.feedSources);
    //   _feedSourcesLoaded = true;
    //   FeedSourceStore.__emitChange();
    //   break;
    case UserConstants.USER_SIGNED_IN:
      populate_feedSources(payload.initialData.feedSources);
      _feedSourcesLoaded = true;
      FeedSourceStore.__emitChange();
      break;
    case UserConstants.SIGN_OUT_USER:
      resetStore();
  }
};

var resetStore = function() {
  _feedSources = {};
  _feedSourcesById = {};
  _feedSourcesLoaded = false;
};

FeedSourceStore.all = function() {
  return _feedSources;
};

FeedSourceStore.addingNewFeedSourceData = function() {
  return _addingNewFeedSourceData;
};

FeedSourceStore.resetAddingNewFeedSourceData = function() {
  _addingNewFeedSourceData = {
    addedFeedSource: false,
    payload: undefined
  };
};

FeedSourceStore.feedSourcesLoaded = function() {
  return _feedSourcesLoaded;
};


module.exports = FeedSourceStore;
