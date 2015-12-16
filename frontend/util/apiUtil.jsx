

var ApiUtil = {
  createUser: function(newUser) {
    $.ajax({
      method: 'POST',
      url: 'api/users',
      data: {user: newUser},
      success: function() {
        debugger;
      }
    });
  },

  signinUser: function(user) {
    $.ajax({
      method: 'POST',
      url: 'api/session',
      data: {session: user},
      success: function() {
        debugger;
      }
    });
  }


};

module.exports = ApiUtil;
