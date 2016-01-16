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
    var signInForm = document.getElementById("userSignForm");
    var inner = signInForm.getElementsByClassName("userSignOption")[0].innerHTML;
    var user = Object.assign({}, this.state);
    if (inner === "Sign In") {
      ApiUtil.signinUser(user);
    } else {
      ApiUtil.createUser(user);
    }
  },

  render: function() {
    return (
      <div className="userSignDiv">
        <form id="userSignForm" onSubmit={this.handleSubmit}>
          <h3 className="userSignOption"></h3>
          <div className="input">
            <label htmlFor="signin_username">Username</label>
            <input type="text" id="signin_username" valueLink={this.linkState('username')} />
          </div>
          <div className="input">
            <label htmlFor="signin_password">Password</label>
            <input type="password" id="signin_password" valueLink={this.linkState('password')} />
          </div>

          <button type="submitSign">Sign In</button>

        </form>
      </div>
    );
  }
});

module.exports = SigninForm;
