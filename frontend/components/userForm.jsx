var React = require('react');
var SigninForm = require('./signinForm');
var SignupForm = require('./signupForm');

var UserForm = React.createClass({
  render: function() {
    return (
      <div id="userForm">
        <SigninForm />
        <SignupForm />
      </div>
    );
  }
});

module.exports = UserForm;
