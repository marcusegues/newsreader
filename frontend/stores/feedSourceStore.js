var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var FeedSourceStore = new Store(AppDispatcher);
var FeedSourceConstants = require('feedSourceConstants');

var currentUser = undefined;
var _feedSources = [];

FeedSourceStore.__onDispatch = function(payload) {
  switch (payload.actionType) {
    case FeedSourceConstants.RECEIVED_FEED_SOURCES:
      _feedSources = payload.feedSources;
      FeedSourceStore.__emitChange();
      break;
  }
};

module.exports = FeedSourceStore;
