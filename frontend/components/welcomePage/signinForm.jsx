var React = require('react');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var ApiUtil = require('../../util/apiUtil.jsx');
var ApiActions = require('../../actions/apiActions');

var SigninForm = React.createClass({
  mixins: [LinkedStateMixin],

  getInitialState: function() {
    return {username: "", password: ""};
  },

  componentDidMount: function() {
    window.fbAsyncInit = function() {
      FB.init({
        appId      : '1691421964447573',
        cookie     : true,  // enable cookies to allow the server to access
                          // the session
        xfbml      : true,  // parse social plugins on this page
        version    : 'v2.5' // use graph api version 2.5
      });
    };

    (function(d, s, id){
       var js, fjs = d.getElementsByTagName(s)[0];
       if (d.getElementById(id)) {return;}
       js = d.createElement(s); js.id = id;
       js.src = "//connect.facebook.net/en_US/sdk.js";
       fjs.parentNode.insertBefore(js, fjs);
     }(document, 'script', 'facebook-jssdk'));
  },

  handleSubmit: function(e) {
    e.preventDefault();
    var newUser = Object.assign({}, this.state);
    ApiUtil.signinUser(newUser);
  },

  closeSignIn: function() {
    this.props.closeModal(false);
  },

  switchToSignUp: function() {
    this.props.closeModal(true);
  },

  signInToFacebook: function() {
    ApiUtil.signInToFacebook();
  },

  // <div className="fb-login-button-mine" onClick={this.signInToFacebook}>{"Sign in with Facebook"}</div>
  render: function() {
    return (
      this.props.visible === false ? null :
      <div className="userSignForm">
        <form className="signup-form" onSubmit={this.handleSubmit}>
          <div className="fb-login-button" onClick={this.signInToFacebook}>
            <span className="fa fa-facebook fb-login-content-icon"></span>
            <span className="fb-login-content-message">{"Sign in with Facebook"}</span>
          </div>
          <div className="lineorline">
            <span className="halfSeparator"></span><span id="or">or</span><span className="halfSeparator"></span>
          </div>
          <div className="inputIcon">
            <span className="fa fa-user"></span>
            <input type="text" name="username" id="username" placeholder="Username" valueLink={this.linkState('username')} />
          </div>
          <div className="inputIcon">
            <span className="fa fa-key"></span>
            <input type="password" name="password" id="password" placeholder="Password" valueLink={this.linkState('password')} />
          </div>
          <input className="formSubmit" type="submit" value="Sign In" />
          <span className="lineSeparator"></span>
          <p>{"Don't have an account?"} <a onClick={this.switchToSignUp}>Sign up</a></p>
        </form>
        <div className="modal-screen" onClick={this.closeSignIn} ></div>
      </div>
    );
  }
});

module.exports = SigninForm;
