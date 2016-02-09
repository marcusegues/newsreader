var React = require('react');
var FeedItemsIndex = require('./feedItemsIndex');
var ViewFeedsHeader = require('./viewFeedsHeader');
var FeedItemStore = require('../../stores/feedItemStore');
var FeedSourceStore = require('../../stores/feedSourceStore');
var FeedItemConstants = require('../../constants/feedItemConstants');
var ApiUtil = require('../../util/apiUtil');

var ViewFeeds = React.createClass({
  getInitialState: function() {
    return {displayedFeeds: [],
            displayedFeedSourceId: null};
  },

  componentDidMount: function() {
    this.feedListener = FeedItemStore.addListener(this.handleReceivedFeeds);
    // If we are refreshing the page, today's feeds will not have been loaded, we must do it manually
    // Else, we have just signed in, in which case today's feeds were already received
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

  displayingToday: function() {
    return this.state.displayedFeedSourceId === FeedItemConstants.TODAY_FEEDS_ID;
  },

  render: function() {
    var feedSource = FeedSourceStore.getFeedSourceById(this.state.displayedFeedSourceId);
    return (
      <div className="viewFeeds">
        <ViewFeedsHeader displayedFeedSource={feedSource}/>
        <FeedItemsIndex displayedFeeds={this.state.displayedFeeds}
                        today={this.displayingToday()}/>
      </div>
    );
  }
});

module.exports = ViewFeeds;
