var React = require('react');
var CreateNewFeedSourceModal = require('./createNewFeedSourceModal');

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

  render: function() {
    return (
      <div>
        <button onClick={this.createNewFeedSource}>Add New Content</button>
        <CreateNewFeedSourceModal
          modalOpen={this.state.modalOpen}
          closeModal={this.closeModal}/>
      </div>
    );
  }
});

module.exports = FeedOptions;
