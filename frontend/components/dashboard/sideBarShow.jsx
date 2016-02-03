var React = require('react');
var CategoriesIndex = require('./categoriesIndex');
var FeedOptions = require('./feedOptions');
var GeneralCategories = require('./generalCategories');
var classNames = require('classnames');

var SideBarShow = React.createClass({
  getInitialState: function() {
    return (
      {
        pinned: true,
        shrinkSideBar: false
      }
    );
  },

  clickedPinButton: function() {
    var newState = {
      pinned: !this.state.pinned
    };

    if (this.state.pinned) {
      newState.shrinkSideBar = !this.state.shrinkSideBar;
      this.sideBarShowDiv.addEventListener('mouseover', this.expandSideBar);
    } else {
      this.sideBarShowDiv.removeEventListener('mouseout', this.shrinkSideBar);
    }
    this.setState(newState);
  },

  shrinkSideBar: function() {
    // this.sideBarShowDiv.classList.add("sideBarShowTransition");
    this.setState({shrinkSideBar: !this.state.shrinkSideBar});
    this.sideBarShowDiv.addEventListener('mouseover', this.expandSideBar);
  },

  expandSideBar: function() {
    // this.sideBarShowDiv.classList.remove("sideBarShowTransition");
    this.setState({shrinkSideBar: !this.state.shrinkSideBar});
    this.sideBarShowDiv.removeEventListener('mouseover', this.expandSideBar);
    this.sideBarShowDiv.addEventListener('mouseout', this.shrinkSideBar);
  },

  componentDidMount: function() {
    this.sideBarShowDiv = document.querySelector(".sideBarShow");
  },

  render: function() {
    var sideBarClasses = classNames({
      sideBarShow: true,
      sideBarShowTransition: this.state.shrinkSideBar
    });

    var sideBarContentClasses = classNames({
      sideBarContent: true,
      sideBarContentTransition: this.state.shrinkSideBar
    });

    return (
      <div className={sideBarClasses}>
        <div className={sideBarContentClasses}>
          <div id="pinButtonRow"><div onClick={this.clickedPinButton} id="pinButton">{this.state.pinned ? "Unpin" : "Pin" }</div></div>
          <GeneralCategories />
          <CategoriesIndex />
          <FeedOptions />
        </div>
      </div>
    );
  }
});

module.exports = SideBarShow;
