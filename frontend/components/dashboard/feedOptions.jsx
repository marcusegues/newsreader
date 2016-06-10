var React = require('react');
var CreateNewFeedSourceModal = require('./createNewFeedSourceModal');
var ApiUtil = require('../../util/apiUtil');
var UserStore = require('./../../stores/userStore');

var FeedOptions = React.createClass({
  getInitialState: function () {
    return {modalOpen: false,
            currentUser: UserStore.currentUser()};
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

  closeModal: function () {
    this.setState({modalOpen: false});
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
            <a className="clickButton addFeeds" onClick={this.addFeed} >Add Feeds</a>
        </div>
      </div>
    );
  }
});

module.exports = FeedOptions;
