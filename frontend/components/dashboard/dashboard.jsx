var React = require('react');
var FeedItemsIndex = require('./feedItemsIndex.jsx');
var ApiUtil = require('../../util/apiUtil');
var UserStore = require('../../stores/userStore');
var SideBarShow = require('./sideBarShow');

var Dashboard = React.createClass({

  componentWillMount: function() {
    if (window.CURRENT_USER_ID === -1) {
      this.props.history.pushState(null, '/');
    }
    this.userListener = UserStore.addListener(this.handleUserSignOut);
    //ApiUtil.fetchCurrentUser();
  },

  handleUserSignOut: function() {
    var currentUser = UserStore.currentUser();
    if (currentUser === undefined) {
      this.props.history.pushState(null, '/');
    }
  },

  handleSignOut: function() {
    ApiUtil.signOutUser();
  },

  render: function() {
    return (
      <div className="loggedInPage">
        <SideBarShow />
        {this.props.children}
      </div>
    );
  }
});

module.exports = Dashboard;
