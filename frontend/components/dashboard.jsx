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

  render: function() {
    return (
      <div className="row">
        <div className="mainWindows col-xs-4">
          <CategoriesIndex />
          <FeedOptions />
        </div>
        <div className="mainWindows col-xs-8">
          <FeedItemsIndex />
        </div>
      </div>
    );
  }
});

module.exports = Dashboard;
