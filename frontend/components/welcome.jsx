var React = require('react');
var WelcomeImage = require('./welcomeImage');
var UserForm = require('./userForm');
var UserStore = require('../stores/userStore');
var ApiUtil = require('../util/apiUtil');
var SiteFeatures = require('./siteFeatures');

var Welcome = React.createClass({
  _handleNewCurrentUser: function() {
    var currentUser = UserStore.currentUser();
    if (currentUser !== undefined) {
      this.props.history.pushState(null, '/dashboard');
    }
  },

  componentWillMount: function() {
    if (window.CURRENT_USER_ID !== -1) {
      this.props.history.pushState(null, '/dashboard');
    }
    this.userListener = UserStore.addListener(this._handleNewCurrentUser);
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
        <div id="welcomeJumbo">
          <WelcomeImage />
        </div>
        <div>
          <SiteFeatures />
        </div>
      </div>
    );
  }
});

module.exports = Welcome;
