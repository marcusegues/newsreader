var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var FeedSourceStore = new Store(AppDispatcher);
var FeedSourceConstants = require('../constants/feedSourceConstants');
var FeedItemConstants = require('../constants/feedItemConstants');
var UserConstants = require('../constants/userConstants');

var _feedSources = {};  // keys will be categories, values will be feed sources
var _feedSourcesById = {}; //feedsourceid => feedsource, there are special keys for todayFeeds and savedForLaterFeeds
var _feedSourcesNextPageById = {};
var _feedSourcesLoaded = false;

var populate_feedSources = function(feedSources) {
  FeedSourceStore.getUniqueCategories(feedSources).forEach(function(category, idx_cat) {
    _feedSources[category] = [];
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
    case FeedSourceConstants.RECEIVED_CREATED_FEED_SOURCE:
      addCreatedFeedSourceTo_feedSources(payload.createdFeedSource);
      FeedSourceStore.__emitChange();
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

FeedSourceStore.feedSourcesLoaded = function() {
  return _feedSourcesLoaded;
};


module.exports = FeedSourceStore;
