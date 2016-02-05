var React = require('react');
var classNames = require('classnames');
var ApiActions = require('../../actions/apiActions');
var FeedItemConstants = require('../../constants/feedItemConstants');

var GeneralCategories = React.createClass({
  showTodayFeeds: function() {
    ApiActions.changeDisplayedFeeds(FeedItemConstants.TODAY_FEEDS_ID);
  },

  render: function() {
    var iconClasses = classNames({
      "fa": true,
      "categoryIcon": true,
      "verticalCenter": true,
      "fa-angle-down": true
    });

    return (
      <div id="generalCategories">
        <div className="categoryItem" onClick={this.showTodayFeeds}>
          <span className="fa fa-bolt fa-fw categoryIcon verticalCenter"></span>
          <div id={"categoryTitle"}>Today</div>
        </div>
        <div className="categoryItem">
          <span className="fa fa-star-o fa-fw categoryIcon verticalCenter"></span>
          <div id={"categoryTitle"}>Must Reads</div>
        </div>
        <div className="categoryItem">
          <span className="fa fa-bookmark-o fa-fw categoryIcon verticalCenter"></span>
          <div id={"categoryTitle"}>Saved For Later</div>
        </div>
      </div>
    );
  }
});

module.exports = GeneralCategories;
