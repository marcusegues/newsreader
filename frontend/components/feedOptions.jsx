var React = require('react');
var CreateNewFeedSourceModal = require('./createNewFeedSourceModal');
var ApiUtil = require('../util/apiUtil');

var FeedOptions = React.createClass({
  getInitialState: function () {
    return {modalOpen: false};
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
    return (
      <div>
        <div className="submit">
          <button onClick={this.createNewFeedSource}>Add New Content</button>
          <button onClick={this.handleSignOut}>Sign Out</button>
        </div>
        <CreateNewFeedSourceModal
          modalOpen={this.state.modalOpen}
          closeModal={this.closeModal}/>
      </div>
    );
  }
});

module.exports = FeedOptions;
