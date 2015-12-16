var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var UserStore = new Store(AppDispatcher);
var UserConstants = require('../constants/userConstants');

var currentUser = undefined;

UserStore.__onDispatch = function(payload) {
  switch (payload.actionType) {
    case UserConstants.USER_SIGNED_IN:
      currentUser = payload.currentUser;
      UserStore.__emitChange();
      break;
  }
};

UserStore.currentUser = function() {
  return currentUser;
};

module.exports = UserStore;
