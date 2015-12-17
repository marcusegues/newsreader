var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var FeedItemStore = new Store(AppDispatcher);
var FeedItemConstants = require('../constants/feedItemConstants');

var _feeds = {};
var _lastReceivedId = undefined;

FeedItemStore.__onDispatch = function(payload) {
  switch (payload.actionType) {
    case FeedItemConstants.RECEIVED_FEEDS:
    debugger;
      _feeds[payload.feedSourceId] = payload.feeds;
      _lastReceivedId = payload.feedSourceId;
      FeedItemStore.__emitChange();
      break;
    case FeedItemConstants.CHANGE_DISPLAYED_FEEDS:
      _lastReceivedId = payload.feedSourceId;
      FeedItemStore.__emitChange();
  }
};

FeedItemStore.all = function(feedSourceId) {
  return _feeds[feedSourceId];
};

FeedItemStore.lastReceivedId = function() {
  return _lastReceivedId;
};

FeedItemStore.lastReceivedFeeds = function() {
  debugger;
  return _feeds[_lastReceivedId];
};

module.exports = FeedItemStore;
