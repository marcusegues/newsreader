var React = require('react');
var WelcomeImage = require('./welcomeImage');
var UserForm = require('./userForm');
var UserStore = require('../stores/userStore');
var ApiUtil = require('../util/apiUtil');

var Welcome = React.createClass({
  _newCurrentUser: function() {
    var currentUser = UserStore.currentUser;
    if (currentUser !== undefined) {
      this.props.history.pushState(null, '/dashboard');
    }
  },

  componentWillMount: function() {
    // this.userListener = UserStore.addListener(this._newCurrentUser);
    // ApiUtil.fetchCurrentUser();
  },

  componentDidMount: function(){
    this.userListener = UserStore.addListener(this._newCurrentUser);
    // ApiUtil.fetchCurrentUser();
  },

  componentWillUnmount: function(){
    this.userListener.remove();
  },

  render: function() {

    return (
      <div>
        <WelcomeImage />
        <UserForm />
      </div>
    );
  }
});

module.exports = Welcome;
