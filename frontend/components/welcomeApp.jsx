var React = require('react');
var UserForm = require('./userForm');

var WelcomeApp = React.createClass({
  render: function() {
    return (
      <div>
        <img src="/swiss_field.jpg" id="welcomeImage" />
        <UserForm />
      </div>
    );
  }
});

module.exports = WelcomeApp;
