var AppDispatcher = require('../dispatcher/dispatcher');
var FeedSourceConstants = require('../constants/feedSourceConstants');

var ApiActions = {
  receiveCurrentUser: function(currentUser){
    AppDispatcher.dispatch({
      actionType: FeedSourceConstants.USER_SIGNED_IN,
      user: currentUser
    });
  }
};

module.exports = ApiActions;
