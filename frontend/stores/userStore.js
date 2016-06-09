var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var UserStore = new Store(AppDispatcher);
var UserConstants = require('../constants/userConstants');
var FeedItemConstants = require('../constants/feedItemConstants');

var currentUser = undefined;

UserStore.__onDispatch = function(payload) {
  switch (payload.actionType) {
    case UserConstants.USER_SIGNED_IN:
      currentUser= {
        id: payload.initialData.id,
        avatar_url: payload.initialData.userAvatar,
        login_method: payload.initialData.loginMethod,
        username: payload.initialData.username
      };
      UserStore.__emitChange();
      break;
    case FeedItemConstants.RECEIVED_INITIAL_DATA:
      currentUser= {
        id: payload.initialData.id,
        avatar_url: payload.initialData.userAvatar,
        login_method: payload.initialData.loginMethod,
        username: payload.initialData.username
      };
      UserStore.__emitChange();
      break;
    case UserConstants.SIGN_OUT_USER:
      currentUser = undefined;
      UserStore.__emitChange();
  }
};

UserStore.currentUser = function() {
  return currentUser;
};

module.exports = UserStore;
