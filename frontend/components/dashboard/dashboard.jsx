var React = require('react');
var FeedItemsIndex = require('./feedItemsIndex.jsx');
var FeedItemStore = require('../../stores/feedItemStore');
var ApiUtil = require('../../util/apiUtil');
var UserStore = require('../../stores/userStore');
var SideBarShow = require('./sideBarShow');

var Dashboard = React.createClass({
  getInitialState: function() {
    return (
      {
        sideBarPinned: true,
        shrinkSideBar: false
      }
    );
  },

  clickedPinButton: function() {
    var newState = {
      sideBarPinned: !this.state.sideBarPinned
    };

    if (this.state.sideBarPinned) {
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
    this.sideBarShowDiv = this.refs.SideBar.refs.sideBarShow; //document.querySelector(".sideBarShow");
    if (!FeedItemStore.loadedInitialData()) {
      ApiUtil.loadInitialData();
    }
  },

  componentWillMount: function() {
    if (window.CURRENT_USER_ID === -1) {
      this.props.history.pushState(null, '/');
    }
    this.userListener = UserStore.addListener(this.handleUserSignOut);
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

    var childrenWithProps = React.Children.map(this.props.children, function(child) {
      return React.cloneElement(child, { shrinkSideBar: this.state.shrinkSideBar });
    }.bind(this));

    return (
      <div className="loggedInPage">
        <SideBarShow ref="SideBar" clickedPinButton={this.clickedPinButton}
                                   sideBarPinned={this.state.sideBarPinned}
                                   shrinkSideBar={this.state.shrinkSideBar}/>

        {childrenWithProps}
      </div>
    );
  }
});

module.exports = Dashboard;
