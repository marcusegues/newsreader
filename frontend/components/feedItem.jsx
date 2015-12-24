var React = require('react');
var FeedItemStore = require('../stores/feedItemStore');

var FeedItem = React.createClass({
  getInitialState: function() {
    return {display: false};
  },

  showFeed: function() {

    this.setState({display: true});
  },

  render: function() {
    debugger;
    var title = this.props.feed.title;
    var content = this.state.display === true ? this.props.feed.summary : null;
    return (
      <div>
        <div onClick={this.showFeed}>
          {title}
        </div>
        <div className="displayed-feed">
          {content}
        </div>
      </div>
    );
  }
});

module.exports = FeedItem;
