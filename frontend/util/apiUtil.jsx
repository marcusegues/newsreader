var ApiActions = require('../actions/apiActions.jsx');
//currentUser returned by ajax requests should probably use Jbuilder
var ApiUtil = {
  createUser: function(newUser, history) {
    $.ajax({
      method: 'POST',
      url: 'api/users',
      data: {user: newUser},
      success: function(currentUser) {
        ApiActions.receiveCurrentUser(currentUser);
      }
    });
  },

  signinUser: function(user) {
    $.ajax({
      method: 'POST',
      url: 'api/session',
      data: {session: user},
      success: function(currentUser) {
        ApiActions.receiveCurrentUser(currentUser);
      }
    });
  }


};

module.exports = ApiUtil;
