var React = require('react');
var FeedItemsIndex = require('./feedItemsIndex');
var ViewFeedsHeader = require('./viewFeedsHeader');
var FeedItemStore = require('../../stores/feedItemStore');
var FeedSourceStore = require('../../stores/feedSourceStore');
var ApiUtil = require('../../util/apiUtil');

var ViewFeeds = React.createClass({
  getInitialState: function() {
    return {displayedFeeds: [],
            displayedFeedSourceId: null};
  },

  componentDidMount: function() {
    debugger;
    this.feedListener = FeedItemStore.addListener(this.handleReceivedFeeds);
    if (!FeedItemStore.loadedToday()) {
      ApiUtil.loadTodayFeeds();
    } else {
      this.handleReceivedFeeds();
    }
  },

  componentWillUnmount: function () {
    this.feedListener.remove();
  },

  handleReceivedFeeds: function() {
    debugger;
    this.setState({
      displayedFeeds: FeedItemStore.lastReceivedFeeds(),
      displayedFeedSourceId: FeedItemStore.lastReceivedId()
    });
  },

  render: function() {
    var feedSource = FeedSourceStore.getFeedSourceById(this.state.displayedFeedSourceId);
    return (
      <div className="viewFeeds">
        <ViewFeedsHeader displayedFeedSource={feedSource}/>
        <FeedItemsIndex displayedFeeds={this.state.displayedFeeds}/>
      </div>
    );
  }
});

module.exports = ViewFeeds;
