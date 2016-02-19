var AppDispatcher = require('../dispatcher/dispatcher');
var FeedSourceConstants = require('../constants/feedSourceConstants');
var FeedItemConstants = require('../constants/feedItemConstants');
var UserConstants = require('../constants/userConstants');


var ApiActions = {
  receiveCurrentUser: function(initialData){
    debugger;
    AppDispatcher.dispatch({
      actionType: UserConstants.USER_SIGNED_IN,
      initialData: initialData
    });
  },

  receiveFeedSources: function(feedSources) {
    AppDispatcher.dispatch({
      actionType: FeedSourceConstants.RECEIVED_FEED_SOURCES,
      feedSources: feedSources
    });
  },

  receiveFeeds: function(feedsData, feedSourceId) {
    AppDispatcher.dispatch({
      actionType: FeedItemConstants.RECEIVED_FEEDS,
      feedsData: feedsData,
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

  receiveInitialData: function(initialData) {
    AppDispatcher.dispatch({
      actionType: FeedItemConstants.RECEIVED_INITIAL_DATA,
      initialData: initialData
    });
  },

  receiveSavedForLaterFeeds: function(savedForLaterFeeds) {
    AppDispatcher.dispatch({
      actionType: FeedItemConstants.RECEIVED_SAVED_FOR_LATER_FEEDS,
      savedForLaterFeeds: savedForLaterFeeds
    });
  },

  incrementUnread: function(feedSourceId) {
    AppDispatcher.dispatch({
      actionType: FeedItemConstants.INCREMENT_UNREAD,
      feedSourceId: feedSourceId
    });
  },

  decrementUnread: function(feedSourceId) {
    AppDispatcher.dispatch({
      actionType: FeedItemConstants.DECREMENT_UNREAD,
      feedSourceId: feedSourceId
    });
  },

  setFetchingFeedItemsToTrue: function() {
    AppDispatcher.dispatch({
      actionType: FeedItemConstants.SET_FETCHING_FEED_ITEMS_FLAG_TRUE,
    });
  },

  switchFeedSource: function() {
    AppDispatcher.dispatch({
      actionType: FeedItemConstants.SWITCH_FEED_SOURCE,
    });
  }
};

module.exports = ApiActions;
