var React = require('react');
var FeedItemStore = require('../stores/feedItemStore');
var FeedItem = require('./FeedItem');

var FeedItemsIndex = React.createClass({
  getInitialState: function() {
    return {displayedFeeds: []};
  },

  componentDidMount: function() {
    FeedItemStore.addListener(this.handleReceivedFeeds);
    this.feedSource = this.props.feedSource;
  },

  handleReceivedFeeds: function() {
    this.setState({displayedFeeds: FeedItemStore.lastReceivedFeeds()});
  },

  render: function() {
    var feeds = this.state.displayedFeeds.map(function(feed, idx) {
      return <FeedItem key={idx} feed={feed} />;
    });
    return (
      <div>
        {feeds}
      </div>
    );
  }
});

module.exports = FeedItemsIndex;
