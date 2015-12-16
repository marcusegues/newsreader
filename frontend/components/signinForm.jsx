var React = require('react');
var LinkedStateMixin = require('react-addons-linked-state-mixin');

var SigninForm = React.createClass({
  mixins: [LinkedStateMixin],

  getInitialState: function() {
    return {username: "", password: ""};
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
          <input type="text" valueLink={this.linkState('password')} />
          <br />
          <input type="submit" value="SIGN IN" />
        </form>
      </div>
    );
  }
});

module.exports = SigninForm;
