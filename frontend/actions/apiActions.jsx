var AppDispatcher = require('../dispatcher/dispatcher');
var FeedSourceConstants = require('../constants/feedSourceConstants');
var FeedItemConstants = require('../constants/feedItemConstants');
var UserConstants = require('../constants/userConstants');

var ApiActions = {
  receiveCurrentUser: function(currentUser){
    AppDispatcher.dispatch({
      actionType: UserConstants.USER_SIGNED_IN,
      currentUser: currentUser
    });
  },

  receiveFeedSources: function(feedSources) {
    AppDispatcher.dispatch({
      actionType: FeedSourceConstants.RECEIVED_FEED_SOURCES,
      feedSources: feedSources
    });
  },

  receiveFeeds: function(feeds, feedSourceId) {
    AppDispatcher.dispatch({
      actionType: FeedItemConstants.RECEIVED_FEEDS,
      feeds: feeds,
      feedSourceId: feedSourceId
    });
  },

  changeDisplayedFeeds: function(feedSourceId) {
    AppDispatcher.dispatch({
      actionType: FeedItemConstants.CHANGE_DISPLAYED_FEEDS,
      feedSourceId: feedSourceId
    });
  },

  signOutUser: function() {
    AppDispatcher.dispatch({
      actionType: UserConstants.SIGN_OUT_USER
    });
  },

  receiveCreatedFeedSource: function(createdFeedSource) {
    AppDispatcher.dispatch({
      actionType: FeedSourceConstants.RECEIVED_CREATED_FEED_SOURCE,
      createdFeedSource: createdFeedSource
    });
  },

  receiveTodayFeeds: function(todayFeeds) {
    AppDispatcher.dispatch({
      actionType: FeedItemConstants.RECEIVED_TODAY_FEEDS,
      todayFeeds: todayFeeds
    });
  }
};

module.exports = ApiActions;
