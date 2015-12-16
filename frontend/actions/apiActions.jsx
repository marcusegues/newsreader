var AppDispatcher = require('../dispatcher/dispatcher');
var FeedSourceConstants = require('../constants/feedSourceConstants');
var UserConstants = require('../constants/userConstants');

var ApiActions = {
  receiveCurrentUser: function(currentUser){
    AppDispatcher.dispatch({
      actionType: UserConstants.USER_SIGNED_IN,
      user: currentUser
    });
  },

  receiveFeedSources: function(feedSources) {
    AppDispatcher.dispatch({
      actionType: FeedSourceConstants.RECEIVED_FEED_SOURCES,
      feedsources: feedSources
    });
  }
};

module.exports = ApiActions;
