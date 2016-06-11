var AppDispatcher = require('../dispatcher/dispatcher');
var FeedSourceConstants = require('../constants/feedSourceConstants');
var FeedItemConstants = require('../constants/feedItemConstants');
var UserConstants = require('../constants/userConstants');


var ApiActions = {
  receiveCurrentUser: function(initialData){
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

  receiveAddedFeedSourceData: function(feedsData) {
    AppDispatcher.dispatch({
      actionType: FeedItemConstants.ADDED_NEW_FEEDSOURCE,
      feedsData: feedsData,
      feedSource: [feedsData.feedSource],
      feedSourceId: feedsData.feedSource.id
    });
  },

  updateFeedItemStoreAfterAddedNewFeedSource: function(payload) {
    AppDispatcher.dispatch({
      actionType: FeedItemConstants.UPDATE_FEED_ITEM_STORE_AFTER_ADDED_NEW_FEEDSOURCE,
      feedsData: payload.feedsData,
      feedSource: payload.feedsData.feedSource,
      feedSourceId: payload.feedsData.feedSource.id
    });
  },

  receiveFeeds: function(feedsData, feedSourceId) {
    AppDispatcher.dispatch({
      actionType: FeedItemConstants.RECEIVED_FEEDS,
      feedsData: feedsData,
      feedSourceId: feedSourceId
    });
  },

  receiveFeedsUpdate: function(feedsData, feedSourceId) {
    AppDispatcher.dispatch({
      actionType: FeedItemConstants.RECEIVED_FEEDS_UPDATE,
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

  setFetchingFeedItemsToTrue: function(options) {
    AppDispatcher.dispatch({
      actionType: FeedItemConstants.SET_FETCHING_FEED_ITEMS_FLAG_TRUE,
      onScroll: options.onScroll
    });
  },

  switchFeedSource: function(switching_to_id) {
    AppDispatcher.dispatch({
      actionType: FeedItemConstants.SWITCH_FEED_SOURCE,
      switching_to_id: switching_to_id
    });
  },

  checkLoginState: function(response) {
    if (response.status === 'connected') {
      console.log("already connected to both");
      console.log(response.authResponse.accessToken);
      console.log(response);
      FB.api('/me', function(response) {
      console.log(JSON.stringify(response));
});
    } else if (response.status === 'not_authorized') {
      console.log('damn');
      console.log(response.authResponse.accessToken);
    } else {
      // The person is not logged into Facebook, so we're not sure if
      // they are logged into this app or not.
    }
  },

  // checkLoginState: function() {
  //   FB.getLoginStatus(function(response) {
  //     this.statusChangeCallback(response);
  //   }.bind(this));
  // },
  //
  // // This is called with the results from from FB.getLoginStatus().
  // statusChangeCallback: function(response) {
  //   console.log('statusChangeCallback');
  //   console.log(response);
  //   // The response object is returned with a status field that lets the
  //   // app know the current login status of the person.
  //   // Full docs on the response object can be found in the documentation
  //   // for FB.getLoginStatus().
  //   if (response.status === 'connected') {
  //     // Logged into your app and Facebook.
  //     this.testAPI();
  //   } else if (response.status === 'not_authorized') {
  //     // The person is logged into Facebook, but not your app.
  //     alert('Please log ' + 'into this app.');
  //   } else {
  //     // The person is not logged into Facebook, so we're not sure if
  //     // they are logged into this app or not.
  //     alert('Please log ' + 'into Facebook.');
  //   }
  // },
};

module.exports = ApiActions;
