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

  render: function() {
    return (
      <form className="signup-form" onSubmit={this.handleSubmit}>
        <input type="text" name="username" id="username" placeholder="Username" valueLink={this.linkState('username')} />
        <input type="password" name="password" id="password" placeholder="Password" valueLink={this.linkState('password')} />
        <input type="submit" value="Sign Up" />
      </form>
    );
  }
});

module.exports = SignupForm;
