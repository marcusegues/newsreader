var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var FeedSourceStore = new Store(AppDispatcher);
var FeedSourceConstants = require('../constants/feedSourceConstants');

var _feedSources = {};

FeedSourceStore.__onDispatch = function(payload) {
  switch (payload.actionType) {
    case FeedSourceConstants.RECEIVED_FEED_SOURCES:
      this.getCategories(payload.feedSources).forEach(function(category, idx_cat) {
        _feedSources[category] = [];
        payload.feedSources.forEach(function(feedSource, idx_fs) {
          if (feedSource.category === category) {
            _feedSources[category].push(feedSource);
          }
        });
      });
      FeedSourceStore.__emitChange();
      break;
  }
};

FeedSourceStore.all = function() {
  return _feedSources;
};

FeedSourceStore.getCategories = function(feedSources) {
  var unique = [];

  feedSources.forEach(function(feedSource, idx) {
    if (unique.indexOf(feedSource.category) === -1) {
      unique.push(feedSource.category);
    }
  });

  return unique;
};

module.exports = FeedSourceStore;
