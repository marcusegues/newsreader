var React = require('react');

var BottomNav = React.createClass({
  openSignInForm: function() {
    this.props.toggleSignInModalVisible(false);
  },

  openSignUpForm: function() {
    this.props.toggleSignUpModalVisible(false);
  },

  render: function() {
    return (
      <header id="bottomNav">
        <h1>
          <div id="logoText">
            <img id="welcomeAvatar" src="http://res.cloudinary.com/dolgs87zk/image/upload/v1465478807/SFLogo_jscwfx.jpg">
            </img>
            <div><strong>Swiss Feeds.</strong> Read and Discover Switzerland.</div>
          </div>
        </h1>
        <nav>
          <ul>
              <li><a onClick={this.openSignUpForm}>Sign Up</a></li>
              <li><a onClick={this.openSignInForm}>Sign In</a></li>
          </ul>
        </nav>
      </header>
    );
  }
});

module.exports = BottomNav;
