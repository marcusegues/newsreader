var React = require('react');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var ApiUtil = require('../../util/apiUtil.jsx');

var SigninForm = React.createClass({
  mixins: [LinkedStateMixin],

  getInitialState: function() {
    return {username: "", password: ""};
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

  render: function() {
    return (
      this.props.visible === false ? null :
      <div className="userSignForm">
        <form className="signup-form" onSubmit={this.handleSubmit}>
          <p>Sign In</p>
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
