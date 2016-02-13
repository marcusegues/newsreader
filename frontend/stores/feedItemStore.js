var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var FeedItemStore = new Store(AppDispatcher);
var FeedItemConstants = require('../constants/feedItemConstants');
var UserConstants = require('../constants/userConstants');

// feedSourceId => array of feeds
// Id 0 corresponds to Today's feeds
var _feeds = {};
var _lastReceivedId = undefined;
var _unreadCount = {};
var loadedInitialData = false;

var handleInitialData = function(payload) {
  _lastReceivedId = FeedItemConstants.TODAY_FEEDS_ID;
  _feeds[FeedItemConstants.TODAY_FEEDS_ID] = payload.initialData.todayFeeds;
  _unreadCount = JSON.parse(payload.initialData.unreadCount);
  debugger;
  _unreadCount[FeedItemConstants.TODAY_FEEDS_ID] = payload.initialData.todayFeedsUnreadCount;
  loadedInitialData = true;
};

FeedItemStore.__onDispatch = function(payload) {
  switch (payload.actionType) {
    case FeedItemConstants.RECEIVED_FEEDS:
      _feeds[payload.feedSourceId] = payload.feeds;
      _lastReceivedId = payload.feedSourceId;
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
  }
};

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
