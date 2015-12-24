var React = require('react');
var NewFeedSourceFormModal = require('./newFeedSourceFormModal');

var CreateNewFeedSource = React.createClass({
  render: function() {

    return (
      this.props.modalOpen === false ? null : <NewFeedSourceFormModal modalOpen={this.props.modalOpen}
    closeModal={this.props.closeModal}/>
    );

  }
});
module.exports = CreateNewFeedSource;
