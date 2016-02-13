var React = require('react');
var FeedItemStore = require('../../stores/feedItemStore');
var classNames = require('classnames');

var ViewFeedsNav = React.createClass({

  render: function() {
    var iconClasses = classNames({
      "fa": true,
      "categoryIcon": true,
      "fa-angle-down": true,
      "verticalCenter": true
    });

    var navClasses = classNames({
      "viewFeedsNav": true,
      "scrollView": this.props.scrollView,
      "expandLeft": this.props.shrinkSideBar
    });

    return (
      <div className={navClasses}>
        <div id="viewFeedsNavTitle">{this.props.displayedFeedSource === undefined ?
                                       null :
                                       this.props.displayedFeedSource.title}
        </div>
        <div className="viewFeedsNavSubTitle">60 Articles, 75 Unread</div>
        <ul className="viewFeedsHeaderNav">
          <li className="fa fa-check categoryIcon verticalCenter"></li>
          <li className="fa fa-refresh categoryIcon verticalCenter"></li>
          <li className="fa fa-cog categoryIcon verticalCenter"></li>
          <li className="fa fa-arrow-circle-o-up categoryIcon verticalCenter" onClick={this.props.scrollToTop}></li>
        </ul>

      </div>
    );
  }
});

module.exports = ViewFeedsNav;
