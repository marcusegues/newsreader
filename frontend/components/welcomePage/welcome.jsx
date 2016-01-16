var React = require('react');
var WelcomeImage = require('./welcomeImage');
var SigninForm = require('./signinForm');
var UserStore = require('../../stores/userStore');
var ApiUtil = require('../../util/apiUtil');
var NavigationBar = require('../navigationBar');
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
        <header id="header">
          <h1>Swissfeeds.</h1>
          <p>{"A simple newsreader for all your daily reading"}<br />
          {"In need of a break? Explore beautiful"} <a href="http://html5up.net">swiss mountains</a>.</p>
        </header>

  			<form className="signup-form" method="post" action="#">
  				<input type="email" name="email" id="email" placeholder="Email Address" />
          <input type="password" name="password" id="password" placeholder="Password" />
  				<input type="submit" value="Sign In" />
  			</form>

        <header id="bottomNav">
          <h1><a href="index.html"><strong>SF</strong> Ramona Ambuehl, hottie</a></h1>
          <nav>
            <ul>
              <li><a href="#" className="icon fa-info-circle">About</a></li>
            </ul>
          </nav>
        </header>

        <footer>
          <a href="#one" className="button style2 right">More</a>
        </footer>

      </div>
    );
  }
});

module.exports = Welcome;
