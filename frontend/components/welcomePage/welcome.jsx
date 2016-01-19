var React = require('react');
var WelcomeImage = require('./welcomeImage');
var UserStore = require('../../stores/userStore');
var ApiUtil = require('../../util/apiUtil');
var WelcomeMainMessage = require('./welcomeMainMessage');
var BottomNav = require('./bottomNav');
var SigninForm = require('./signinForm');
var SignupForm = require('./signupForm');
var WelcomeBackground = require('./welcomeBackground');
var WelcomeBackground2 = require('./WelcomeBackground2');
var classNames = require('classnames');

var Welcome = React.createClass({
  getInitialState: function() {
      return (
        {arrowClicked: false}
      );
  },

  _handleNewCurrentUser: function() {
    var currentUser = UserStore.currentUser();
    if (currentUser !== undefined) {
      this.props.history.pushState(null, '/dashboard');
    }
  },

  _handleSignOut: function() {

  },

  componentWillMount: function() {
    if (window.CURRENT_USER_ID !== -1) {
      this.props.history.pushState(null, '/dashboard');
    }
    this.userListener = UserStore.addListener(this._handleNewCurrentUser);
    this.signOutListener = UserStore.addListener(this._handleSignOut);
    //ApiUtil.fetchCurrentUser();
  },

  componentDidMount: function(){
    // debugger;
    // this.userListener = UserStore.addListener(this._newCurrentUser);
    // ApiUtil.fetchCurrentUser();
  },

  componentWillUnmount: function(){
    this.userListener.remove();
  },

  toggleArrowClicked: function() {
    var arrowClicked = this.state.arrowClicked === true ? false : true;
    this.setState({arrowClicked: arrowClicked});
  },

  render: function() {

    return (
      <div>
        <WelcomeMainMessage arrowClicked={this.state.arrowClicked}
                            toggleArrowClicked={this.toggleArrowClicked} />
        <BottomNav />
        <WelcomeBackground arrowClicked={this.state.arrowClicked} />
        <WelcomeBackground2 arrowClicked={this.state.arrowClicked}/>
      </div>
    );
  }
});

module.exports = Welcome;
