var React = require('react');
var CategoriesIndex = require('./categoriesIndex');
var FeedOptions = require('./feedOptions');
var GeneralCategories = require('./generalCategories');
var classNames = require('classnames');

var SideBarShow = React.createClass({

  render: function() {
    var sideBarClasses = classNames({
      sideBarShow: true,
      sideBarShowTransition: this.props.shrinkSideBar
    });

    var sideBarContentClasses = classNames({
      sideBarContent: true,
      sideBarContentTransition: this.props.shrinkSideBar
    });

    return (
      <div className={sideBarClasses} ref="sideBarShow">
        <div className={sideBarContentClasses}>
          <div id="pinButtonRow">
            <div onClick={this.props.clickedPinButton}
                 id="pinButton">{this.props.sideBarPinned ? "Unpin" : "Pin" }
            </div>
          </div>
          <GeneralCategories />
          <CategoriesIndex />
          <FeedOptions />
        </div>
      </div>
    );
  }
});

module.exports = SideBarShow;
