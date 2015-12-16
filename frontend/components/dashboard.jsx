var React = require('react');
var CategoriesIndex = require('./categoriesIndex');
var FeedsWindow = require('./feedsWindow.jsx');

var Dashboard = React.createClass({
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
