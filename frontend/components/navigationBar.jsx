var React = require('react');
var ApiUtil = require('../util/apiUtil');

var NavigationBar = React.createClass({
  handleSignOut: function() {
    ApiUtil.signOutUser();
  },

  signIn: function() {
    debugger;
    var signInForm = document.getElementById("userSignForm");
    signInForm.getElementsByClassName("userSignOption")[0].innerHTML = "Sign In";
    signInForm.style.right = "10px";
  },

  signUp: function() {
    debugger;
    var signUpForm = document.getElementById("userSignForm");
    signUpForm.getElementsByClassName("userSignOption")[0].innerHTML = "Sign Up";
    signUpForm.style.right = "10px";
  },

  demo: function() {
    var user = {username: "marcus", password: "password"};
    ApiUtil.signinUser(user);
  },

  render: function() {
    var signOptions = "";
    if (window.CURRENT_USER_ID !== -1) {
        signOptions = (
          <ul className="header-list group">
            <li><a onClick={this.handleSignOut}>Sign Out</a></li>
          </ul>
        );
    } else {
      signOptions = (
        <ul className="header-list group">
          <li onClick={this.demo}><a href="#">Demo</a></li>
          <li onClick={this.signIn}><a href="#">Sign In</a></li>
          <li onClick={this.signUp}><a href="#">Sign Up</a></li>
        </ul>
      );
    }

    return (
      <header className="header group">
        <h1 className="header-logo">
          <a href="#">Swissfeeds</a>
        </h1>
        {signOptions}
      </header>
    );
  }

});
module.exports = NavigationBar;
