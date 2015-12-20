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
      <div id="userSign">
        <h3>Sign In</h3>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label for="signin_username">Username</label>
            <input type="text" className="form-control input-sm" id="signin_username" valueLink={this.linkState('username')} />
          </div>
          <div className="form-group">
            <label for="signin_password">Password</label>
            <input type="password" className="form-control input-sm" id="signin_password" valueLink={this.linkState('password')} />
          </div>

          <button className="btn btn-primary" type="submit">Sign In</button>
        </form>
      </div>
    );
  }
});

module.exports = SigninForm;
