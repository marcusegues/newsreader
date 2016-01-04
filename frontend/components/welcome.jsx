var React = require('react');
var WelcomeImage = require('./welcomeImage');
var SigninForm = require('./signinForm');
var UserStore = require('../stores/userStore');
var ApiUtil = require('../util/apiUtil');
var NavigationBar = require('./navigationBar');
var WelcomeMessage = require('./welcomeMessage');


var Welcome = React.createClass({
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

  render: function() {

    return (
      <div>
        <NavigationBar/>
        <div>
          <WelcomeImage />
        </div>
        <WelcomeMessage />
        <SigninForm />
      </div>
    );
  }
});

module.exports = Welcome;
