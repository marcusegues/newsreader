var React = require('react');
var UserForm = require('./userForm');

var WelcomeImage = React.createClass({

  render: function() {
    return (
      <div className="jumbotron">
        <UserForm />
      </div>
    );
  }
});

module.exports = WelcomeImage;
