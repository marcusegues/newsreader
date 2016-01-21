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

  render: function() {
    return (
      this.props.visible === false ? null :
      <div>
        <form className="signup-form" onSubmit={this.handleSubmit}>
          <p>Create New User</p>
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
