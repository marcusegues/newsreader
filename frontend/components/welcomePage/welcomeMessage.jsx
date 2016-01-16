var React = require('react');

var WelcomeMessage = React.createClass({
  render: function() {
    return (
      <div id="welcomeMessage">
        <h1>Welcome to your work newsfeed</h1>
        <h3>{"A single place for all the RSS and Atom feeds you want."}</h3>
      </div>
    );
  }

});

module.exports = WelcomeMessage;
