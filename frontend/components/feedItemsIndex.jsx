var React = require('react');
var FeedItemStore = require('../stores/feedItemStore');
var FeedItem = require('./feedItem');

var FeedItemsIndex = React.createClass({
  getInitialState: function() {
    return {displayedFeeds: []};
  },

  componentDidMount: function() {
    this.feedListener = FeedItemStore.addListener(this.handleReceivedFeeds);
    this.feedSource = this.props.feedSource;
  },
  componentWillUnmount: function () {
    this.feedListener.remove();
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
