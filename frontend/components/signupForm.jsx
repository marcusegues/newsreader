var React = require('react');
var LinkedStateMixin = require('react-addons-linked-state-mixin');

var SignupForm = React.createClass({
  mixins: [LinkedStateMixin],

  getInitialState: function() {
    return {username: "", password: ""};
  },

  handleSubmit: function(e) {
    e.preventDefault();
    var newUser = Object.assign({}, this.state);
  },

  render: function() {
    return (
      <div>
        <h3>Sign Up</h3>
        <form onSubmit={this.handleSubmit}>
          <label>Username</label>
          <input type="text" valueLink={this.linkState('username')} />
          <br />
          <label>Password</label>
          <input type="text" valueLink={this.linkState('password')} />
          <br />
          <input type="submit" value="SIGN UP" />
        </form>
      </div>
    );
  }
});

module.exports = SignupForm;
