var React = require('react');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var ApiUtil = require('../../util/apiUtil.jsx');

var SignupForm = React.createClass({
  mixins: [LinkedStateMixin],

  getInitialState: function() {
    return {username: "", password: ""};
  },

  handleSubmit: function(e) {
    e.preventDefault();
    var newUser = Object.assign({}, this.state);
    ApiUtil.createUser(newUser);
  },

  closeSignUp: function() {
    this.props.closeModal(false);
  },

  switchToSignIn: function() {
    this.props.closeModal(true);
  },

  signInToFacebook: function() {
    ApiUtil.signInToFacebook();
  },

  render: function() {
    return (
      this.props.visible === false ? null :
      <div className="userSignForm">
        <form className="signup-form" onSubmit={this.handleSubmit}>
          <div className="fb-login-button" onClick={this.signInToFacebook}>
            <span className="fa fa-facebook fb-login-content-icon"></span>
            <span className="fb-login-content-message">{"Sign up with Facebook"}</span>
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
          <input className="formSubmit" type="submit" value="Sign Up" />
          <span className="lineSeparator"></span>
          <p>Already have an account? <a onClick={this.switchToSignIn}>Sign in</a></p>
        </form>
        <div className="modal-screen" onClick={this.closeSignUp} ></div>
      </div>
    );
  }
});

module.exports = SignupForm;
