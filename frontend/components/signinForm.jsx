var React = require('react');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var ApiUtil = require('../util/apiUtil.jsx');

var SigninForm = React.createClass({
  mixins: [LinkedStateMixin],

  getInitialState: function() {
    return {username: "", password: ""};
  },

  handleSubmit: function(e) {
    e.preventDefault();
    var user = Object.assign({}, this.state);
    ApiUtil.signinUser(user);
  },

  render: function() {
    return (
      <div>
        <h3>Sign In</h3>
        <form onSubmit={this.handleSubmit}>
          <label>Username</label>
          <input type="text" valueLink={this.linkState('username')} />
          <br />
          <label>Password</label>
          <input type="password" valueLink={this.linkState('password')} />
          <br />
          <input type="submit" value="SIGN IN" />
        </form>
      </div>
    );
  }
});

module.exports = SigninForm;
