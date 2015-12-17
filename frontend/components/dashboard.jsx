var React = require('react');
var CategoriesIndex = require('./categoriesIndex');
var FeedItemsIndex = require('./feedItemsIndex.jsx');
var ApiUtil = require('../util/apiUtil');

var Dashboard = React.createClass({

  componentDidMount: function() {
    //ApiUtil.fetchUserFeedSources();
  },

  render: function() {
    return (
      <div>
        <CategoriesIndex class="mainWindows"/>
        <FeedItemsIndex class="mainWindows"/>
      </div>
    );
  }
});

module.exports = Dashboard;
