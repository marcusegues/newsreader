var React = require('react');
var CreateNewFeedSourceModal = require('./createNewFeedSourceModal');
var ApiUtil = require('../../util/apiUtil');
var UserStore = require('./../../stores/userStore');
var AddContent = require('./addContent');

var FeedOptions = React.createClass({
  getInitialState: function () {
    return {currentUser: UserStore.currentUser()};
  },

  componentDidMount: function() {
    this.userStoreListener = UserStore.addListener(this.handleSignedInUser);
  },

  componentWillUnmount: function() {
    this.userStoreListener.remove();
  },

  handleSignedInUser: function() {
    this.setState({currentUser: UserStore.currentUser()});
  },

  createNewFeedSource: function(e) {
    e.preventDefault();
    this.setState({modalOpen: true});
  },

  openAddContentModal: function () {
    this.props.toggleAddContentModalVisible();
  },

  handleSignOut: function() {
    ApiUtil.signOutUser();
  },

  render: function() {
    var currentUser = this.state.currentUser;
    var currentUser_username =
      currentUser === undefined ?
      '' :
      (currentUser.login_method === "facebook" ?
       currentUser.facebook_username :
       currentUser.username);

    return (
      <div id="feedOptions">
        <div id="feedOptionsContents">
          <img id="feedOptionsAvatar" src={currentUser ? currentUser.avatar_url : ''}></img>
          <div id="feedOptionsText">
            <div>{currentUser_username}</div>
            <div>{currentUser === undefined ?
              '' :
              "via " + currentUser.login_method + " / "}
                <span id="feedOptionsLogout" onClick={this.handleSignOut}>Logout</span></div>
          </div>
            <a className="clickButton addFeeds" onClick={this.openAddContentModal} >Add Feeds</a>
        </div>
      </div>
    );
  }
});

module.exports = FeedOptions;
