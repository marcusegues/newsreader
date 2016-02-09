var React = require('react');
var UserStore = require('../../stores/userStore');
var ApiUtil = require('../../util/apiUtil');

var WelcomeMainMessage = require('./welcomeMainMessage');
var BottomNav = require('./bottomNav');
var WelcomeBackground = require('./welcomeBackground');
var WelcomeBackground2 = require('./WelcomeBackground2');
var SignUpForm = require('./signupForm');
var SignInForm = require('./signinForm');
var classNames = require('classnames');

var Welcome = React.createClass({
  getInitialState: function() {
      return (
        {arrowClicked: false,
         signUpModalVisible: false,
         signInModalVisible: false
       }
     );
  },

  toggleSignUpModalVisible: function(showSignIn) {
    var newState = {
      signUpModalVisible: this.state.signUpModalVisible ? false : true,
    };

    if (showSignIn) {
      newState["signInModalVisible"] = this.state.signInModalVisible ? false : true;
    }

    this.setState(newState);
  },

  toggleSignInModalVisible: function(showSignUp) {
    var newState = {
      signInModalVisible: this.state.signInModalVisible ? false : true,
    };

    if (showSignUp) {
      newState["signUpModalVisible"] = this.state.signUpModalVisible ? false : true;
    }

    this.setState(newState);
  },

  _handleNewCurrentUser: function() {
    // var currentUser = UserStore.currentUser();
    var currentUser = window.CURRENT_USER_ID;
    if (currentUser !== -1) {
      this.props.history.pushState(null, '/dashboard');
    }
  },

  _handleSignOut: function() {

  },

  componentWillMount: function() {
    if (window.CURRENT_USER_ID !== -1) {
    // if (UserStore.currentUser() !== undefined ) {
      this.props.history.pushState(null, '/dashboard');
    }
    this.userListener = UserStore.addListener(this._handleNewCurrentUser);
    this.signOutListener = UserStore.addListener(this._handleSignOut);
    //ApiUtil.fetchCurrentUser();
  },

  componentDidMount: function(){
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
      <div id="welcomeBody">
        <WelcomeMainMessage arrowClicked={this.state.arrowClicked}
                            toggleArrowClicked={this.toggleArrowClicked}
                            toggleSignUpModalVisible={this.toggleSignUpModalVisible} />
        <BottomNav toggleSignInModalVisible={this.toggleSignInModalVisible}/>
        <WelcomeBackground arrowClicked={this.state.arrowClicked} />
        <WelcomeBackground2 arrowClicked={this.state.arrowClicked}/>
        <SignUpForm visible={this.state.signUpModalVisible} closeModal={this.toggleSignUpModalVisible} />
        <SignInForm visible={this.state.signInModalVisible} closeModal={this.toggleSignInModalVisible} />
      </div>
    );
  }
});

module.exports = Welcome;
