var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var FeedItemStore = new Store(AppDispatcher);
var FeedSourceConstants = require('../constants/feedSourceConstants');
var FeedItemConstants = require('../constants/feedItemConstants');
var UserConstants = require('../constants/userConstants');
var usefulFunctions = require('../util/usefulFunctions');

// feedSourceId => array of feeds
// Id 0 corresponds to Today's feeds
var _feeds = {};
var _lastReceivedId = undefined;
var _unreadCount = {};
var loadedInitialData = false;
var _fetchingFeedItems = true;
var _switchingFeedSources = true;

var handleInitialData = function(payload) {
  _lastReceivedId = FeedItemConstants.TODAY_FEEDS_ID;
  _feeds[FeedItemConstants.TODAY_FEEDS_ID] = payload.initialData.todayFeeds;
  _unreadCount = JSON.parse(payload.initialData.unreadCount);
  _unreadCount[FeedItemConstants.TODAY_FEEDS_ID] = payload.initialData.todayFeedsUnreadCount;
  loadedInitialData = true;
  _fetchingFeedItems = false;
  _switchingFeedSources = false;
};

FeedItemStore.__onDispatch = function(payload) {
  switch (payload.actionType) {
    case FeedItemConstants.RECEIVED_FEEDS:
      _lastReceivedId = payload.feedSourceId;
      if (!_feeds.hasOwnProperty(_lastReceivedId)) {
        _feeds[_lastReceivedId] = [];
      }
      _feeds[_lastReceivedId] =
          _feeds[_lastReceivedId].concat(payload.feedsData.feeds);
      usefulFunctions.updateObject(_unreadCount, JSON.parse(payload.feedsData.unreadCount));
      _fetchingFeedItems = false;
      _switchingFeedSources = false;
      FeedItemStore.__emitChange();
      break;
    case FeedItemConstants.CHANGE_DISPLAYED_FEEDS:
      _lastReceivedId = payload.feedSourceId;
      FeedItemStore.__emitChange();
      break;
    case UserConstants.USER_SIGNED_IN:
      handleInitialData(payload);
      FeedItemStore.__emitChange();
      break;
    case FeedItemConstants.RECEIVED_INITIAL_DATA:
      handleInitialData(payload);
      FeedItemStore.__emitChange();
      break;
    case FeedItemConstants.RECEIVED_SAVED_FOR_LATER_FEEDS:
      _lastReceivedId = FeedItemConstants.SAVED_FOR_LATER_FEEDS_ID;
      _feeds[FeedItemConstants.SAVED_FOR_LATER_FEEDS_ID] = payload.savedForLaterFeeds;
      FeedItemStore.__emitChange();
      break;
    case FeedItemConstants.INCREMENT_UNREAD:
      _unreadCount[payload.feedSourceId] += 1;
      FeedItemStore.__emitChange();
      break;
    case FeedItemConstants.DECREMENT_UNREAD:
      _unreadCount[payload.feedSourceId] -= 1;
      FeedItemStore.__emitChange();
      break;
    case FeedItemConstants.SET_FETCHING_FEED_ITEMS_FLAG_TRUE:
      _fetchingFeedItems = true;
      FeedItemStore.__emitChange();
      break;
    case FeedItemConstants.SWITCH_FEED_SOURCE:
      _fetchingFeedItems = true;
      _switchingFeedSources = true;
      FeedItemStore.__emitChange();
      break;
  }
};

FeedItemStore.fetchingFeedItems = function() {
  return _fetchingFeedItems;
},

FeedItemStore.switchingFeedSources = function() {
  return _switchingFeedSources;
},

FeedItemStore.incrementUnread = function(feedSourceId) {
  _unreadCount[feedSourceId] += 1;
},

FeedItemStore.decrementUnread = function(feedSourceId) {
  _unreadCount[feedSourceId] -= 1;
},

FeedItemStore.unreadCount = function(feedSourceId) {
  return _unreadCount[feedSourceId];
},

FeedItemStore.loadedInitialData = function() {
  return loadedInitialData;
};

FeedItemStore.all = function(feedSourceId) {
  return _feeds[feedSourceId];
};

FeedItemStore.lastReceivedId = function() {
  return _lastReceivedId;
};

FeedItemStore.lastReceivedFeeds = function() {
  return _feeds[_lastReceivedId];
};

FeedItemStore.todayFeeds = function() {
  return _feeds[FeedItemConstants.TODAY_FEEDS_ID];
};

module.exports = FeedItemStore;
