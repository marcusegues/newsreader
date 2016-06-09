var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var UserStore = new Store(AppDispatcher);
var UserConstants = require('../constants/userConstants');
var FeedItemConstants = require('../constants/feedItemConstants');

var currentUser = undefined;

var getCurrentUserFromInitialData = function(initialData) {
  currentUser= {
    id: initialData.id,
    avatar_url: initialData.avatar_url,
    login_method: initialData.login_method,
    username: initialData.username
  };
  return currentUser;
};

UserStore.__onDispatch = function(payload) {
  switch (payload.actionType) {
    case UserConstants.USER_SIGNED_IN:
      currentUser= getCurrentUserFromInitialData(payload.initialData);
      UserStore.__emitChange();
      break;
    case FeedItemConstants.RECEIVED_INITIAL_DATA:
      currentUser= getCurrentUserFromInitialData(payload.initialData);
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
