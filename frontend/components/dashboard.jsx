var React = require('react');
var CategoriesIndex = require('./categoriesIndex');
var FeedsWindow = require('./feedsWindow.jsx');
var ApiUtil = require('../util/apiUtil');

var Dashboard = React.createClass({

  componentDidMount: function() {
    //ApiUtil.fetchUserFeedSources();
  },

  render: function() {
    return (
      <div>
        <CategoriesIndex />
        <FeedsWindow />
      </div>
    );
  }
});

module.exports = Dashboard;
