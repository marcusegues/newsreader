var React = require('react');

var WelcomeApp = React.createClass({
  render: function() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
});

module.exports = WelcomeApp;
