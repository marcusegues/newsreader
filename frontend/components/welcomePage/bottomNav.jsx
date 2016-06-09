var React = require('react');

var BottomNav = React.createClass({
  openSignInForm: function() {
    this.props.toggleSignInModalVisible(false);
  },

  render: function() {
    return (
      <header id="bottomNav">
        <h1>
          <img id="welcomeAvatar" src="http://res.cloudinary.com/dolgs87zk/image/upload/v1465478807/SFLogo_jscwfx.jpg">
          </img>
          <span><strong>Swiss Feeds.</strong> Read and Discover Switzerland.</span>
        </h1>
        <nav>
          <ul>
              <li><a href="#">About</a></li>
              <li><a onClick={this.openSignInForm}>Sign In</a></li>
          </ul>
        </nav>
      </header>
    );
  }
});

module.exports = BottomNav;
