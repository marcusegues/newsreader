var ApiActions = require('../actions/apiActions.jsx');
var FeedSourceStore = require('./../stores/feedSourceStore');

var ApiUtil = {
  createUser: function(newUser) {
    $.ajax({
      method: 'POST',
      url: 'api/users',
      data: {user: newUser},
      success: function(initialData) {
        window.CURRENT_USER_ID = initialData.id;
        ApiActions.receiveCurrentUser(initialData);
      }
    });
  },

  signinUser: function(user) {
    $.ajax({
      method: 'POST',
      url: 'api/session',
      data: {session: user},
      success: function(initialData) {
        window.CURRENT_USER_ID = initialData.id;
        ApiActions.receiveCurrentUser(initialData);
      }
    });
  },

  signOutUser: function() {
    $.ajax({
      method: 'DELETE',
      url: 'api/session',
      success: function() {
        window.CURRENT_USER_ID = -1;
        ApiActions.signOutUser();
      }
    });
    FB.logout();
  },

  signInToFacebook: function() {
    FB.login(this.signInOmniAuth);
  },

  signInOmniAuth: function(response) {
    if ((response.status === "connected") || (response.status === "unauthorized")) {
      $.ajax({
        method: 'GET',
        url: '/auth/facebook/callback',
        // data: {signed_request: response.authResponse.signedRequest},
        success: function(initialData) {
          window.CURRENT_USER_ID = initialData.id;
          ApiActions.receiveCurrentUser(initialData);
        }
      });
    }
  },

  fetchCurrentUser: function() {
    $.ajax({
      method: 'GET',
      url: 'api/current_user',
      success: function(currentUser) {
        if (currentUser === {}) {
          currentUser = undefined;
        }
        ApiActions.receiveCurrentUser(currentUser);
      }
    });
  },

  fetchUserFeedSources: function() {
    $.ajax({
      method: 'GET',
      url: 'api/feedsources',
      success: function(feedSources) {
        ApiActions.receiveFeedSources(feedSources);
      }
    });
  },

  updateAllFeedItems: function() {
    Object.keys(FeedSourceStore.allFeedSources()).forEach(function(feedSourceId, id) {
      $.ajax({
        method: 'GET',
        url:  'api/feeds/' + feedSourceId,
        success: function(feedsData) {
          ApiActions.receiveFeeds(feedsData, feedSourceId);
        }
      });
    });
  },

  fetchFeedItems: function(feedSourceId, page) {
    $.ajax({
      method: 'GET',
      url:  'api/feeds/' + feedSourceId,
      data: {page: page},
      success: function(feedsData) {
        ApiActions.receiveFeeds(feedsData, feedSourceId);
      }
    });
  },

  createFeedSource: function(newFeedSource) {
    $.ajax({
      method: 'POST',
      url: 'api/feedsources',
      data: {feedSource: newFeedSource},
      success: function(createdFeedSource) {
        ApiActions.receiveCreatedFeedSource(createdFeedSource);
      }
    });
  },

  loadInitialData: function() {
    $.ajax({
      method: 'GET',
      url: 'api/initialData',
      success: function(initialData) {
        ApiActions.receiveInitialData(initialData);
      }
    });
  },

  saveFeedForLater: function(feedId) {
    $.ajax({
      method: 'PATCH',
      url: 'api/saveForLater/' + feedId,
    });
  },

  fetchSavedForLater: function() {
    $.ajax({
      method: 'GET',
      url: 'api/savedForLater',
      success: function(savedForLaterFeeds) {
        ApiActions.receiveSavedForLaterFeeds(savedForLaterFeeds);
      }
    });
  },

  setUnreadToFalse: function(feedId) {
    $.ajax({
      method: 'PATCH',
      url: 'api/setUnreadToFalse/' + feedId,
    });
  }
};

module.exports = ApiUtil;
