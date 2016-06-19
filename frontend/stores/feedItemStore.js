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
var _fetchingFeedItemsOnScroll = false;
var _switchingFeedSources = true;
var _switching_to_feedsource_id;

var handleInitialData = function(payload) {
  _lastReceivedId = FeedItemConstants.TODAY_FEEDS_ID;
  _feeds[FeedItemConstants.TODAY_FEEDS_ID] = payload.initialData.todayFeeds;
  _unreadCount = JSON.parse(payload.initialData.unreadCount);
  _unreadCount[FeedItemConstants.TODAY_FEEDS_ID] = payload.initialData.todayFeedsUnreadCount;
  loadedInitialData = true;
  _fetchingFeedItems = false;
  _switchingFeedSources = false;
};

var update_feeds = function(payload) {
  var receivedId = payload.feedSourceId;
  if (!_feeds.hasOwnProperty(receivedId)) {
    _feeds[receivedId] = {};
  }
  _feeds[receivedId][Number(payload.feedsData.page)] = payload.feedsData.feeds;
  usefulFunctions.updateObject(_unreadCount, JSON.parse(payload.feedsData.unreadCount));
  _feeds[FeedItemConstants.TODAY_FEEDS_ID] = payload.feedsData.todayFeeds;
  _unreadCount = JSON.parse(payload.feedsData.unreadCount);
  _unreadCount[FeedItemConstants.TODAY_FEEDS_ID] = payload.feedsData.todayFeedsUnreadCount;
};

FeedItemStore.__onDispatch = function(payload) {
  switch (payload.actionType) {
    case FeedItemConstants.RECEIVED_FEEDS_UPDATE:
      update_feeds(payload);
      FeedItemStore.__emitChange();
      break;
    case FeedItemConstants.UPDATE_FEED_ITEM_STORE_AFTER_ADDED_NEW_FEEDSOURCE:
      _lastReceivedId = payload.feedSourceId;
      update_feeds(payload);
      FeedItemStore.__emitChange();
      break;
    case FeedItemConstants.RECEIVED_FEEDS:
      _switching_to_feedsource_id = undefined;
      _lastReceivedId = payload.feedSourceId;
      update_feeds(payload);
      _fetchingFeedItems = false;
      _fetchingFeedItemsOnScroll = false;
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
      var unread = 0;
      payload.savedForLaterFeeds.forEach(function(feed, i) {
        if (feed.saved_for_later === true) {
          unread += 1;
        }
      });
      _unreadCount[FeedItemConstants.SAVED_FOR_LATER_FEEDS_ID] = unread;
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
      _fetchingFeedItemsOnScroll = payload.onScroll;
      FeedItemStore.__emitChange();
      break;
    case FeedItemConstants.SWITCH_FEED_SOURCE:
      _fetchingFeedItems = true;
      _switchingFeedSources = true;
      _switching_to_feedsource_id = payload.switching_to_id;
      FeedItemStore.__emitChange();
      break;
  }
};

FeedItemStore.fetchingFeedItems = function() {
  return _fetchingFeedItems;
},

FeedItemStore.fetchingFeedItemsOnScroll = function() {
  return _fetchingFeedItemsOnScroll;
},

FeedItemStore.switchingFeedSources = function() {
  return _switchingFeedSources;
},

FeedItemStore.switchingToFeedSourceId = function() {
  return _switching_to_feedsource_id;
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

FeedItemStore.initial_feeds = function() {
  return loadedInitialData;
};

FeedItemStore.areFeedSourceItemsLoaded = function(feedSourceId) {
  if (_feeds[feedSourceId] === undefined) {
    return false;
  } else {
    return true;
  }
};

FeedItemStore.all = function(feedSourceId) {
  if (feedSourceId === FeedItemConstants.TODAY_FEEDS_ID) {
    return this.todayFeeds();
  }

  if (feedSourceId === FeedItemConstants.SAVED_FOR_LATER_FEEDS_ID) {
    return this.savedForLaterFeeds();
  }

  var feedsArray = [];
  var feedsObject = _feeds[feedSourceId];
  Object.keys(feedsObject).sort().forEach(function(key, idx) {
    Array.prototype.push.apply(feedsArray,feedsObject[Number(key)]);
    // feedsArray.concat(feedsObject[Number(key)]);
  });
  return feedsArray;
  // return _feeds[feedSourceId];
};

FeedItemStore.lastReceivedId = function() {
  return _lastReceivedId;
};

FeedItemStore.lastReceivedFeeds = function() {
  return this.all(_lastReceivedId);
  // return _feeds[_lastReceivedId];
};

FeedItemStore.todayFeeds = function() {
  return _feeds[FeedItemConstants.TODAY_FEEDS_ID];
};

FeedItemStore.savedForLaterFeeds = function() {
  return _feeds[FeedItemConstants.SAVED_FOR_LATER_FEEDS_ID];
};

module.exports = FeedItemStore;
