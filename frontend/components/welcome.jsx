var React = require('react');
var WelcomeImage = require('./welcomeImage');
var UserForm = require('./userForm');


var Welcome = React.createClass({
  render: function() {

    return (
      <div>
        <WelcomeImage />
        <UserForm />
      </div>
    );
  }
});

module.exports = Welcome;
