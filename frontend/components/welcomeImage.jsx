var React = require('react');

var WelcomeImage = React.createClass({

  render: function() {
    return (
      <div>
        <img src="./swiss_field.jpg" id="welcomeImage" />
      </div>
    );
  }
});

module.exports = WelcomeImage;
