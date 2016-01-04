var React = require('react');
var CategoriesIndex = require('./categoriesIndex');
var FeedItemsIndex = require('./feedItemsIndex.jsx');
var ApiUtil = require('../util/apiUtil');
var UserStore = require('../stores/userStore');
var FeedOptions = require('./feedOptions');

var Dashboard = React.createClass({

  componentDidMount: function() {
  },

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
      <div className="mainWindows group">
        <div className="mainWindows1">
          <CategoriesIndex />
          <FeedOptions />
        </div>
        <div className="mainWindows2">
          <FeedItemsIndex />
        </div>
        <button onClick={this.handleSignOut}>Sign Out</button>
      </div>
    );
  }
});

module.exports = Dashboard;
