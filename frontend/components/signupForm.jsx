var React = require('react');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var ApiUtil = require('../util/apiUtil.jsx');



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
      <div id="userSign">
        <h3>Sign Up</h3>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="signup_username">Username</label>
            <input type="text" className="form-control input-sm" id="signup_username" valueLink={this.linkState('username')} />
          </div>

          <div className="form-group">
            <label htmlFor="signup_password">Password</label>
            <input type="password" className="form-control input-sm" id="signup_password" valueLink={this.linkState('password')} />
          </div>

          <button className="btn btn-primary" type="submit">Sign Up</button>
        </form>
      </div>
    );
  }
});

module.exports = SignupForm;
