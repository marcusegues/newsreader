var React = require('react');
var FeedItemsIndex = require('./feedItemsIndex');
var ViewFeedsHeader = require('./viewFeedsHeader');
var ViewFeedsNav = require('./viewFeedsNav');
var FeedItemStore = require('../../stores/feedItemStore');
var FeedSourceStore = require('../../stores/feedSourceStore');
var FeedItemConstants = require('../../constants/feedItemConstants');
var ApiUtil = require('../../util/apiUtil');
var ApiActions = require('../../actions/apiActions');
var classNames = require('classnames');

var ViewFeeds = React.createClass({
  getInitialState: function() {
    return {displayedFeeds: [],
            displayedFeedSourceId: null,
            scrollView: false,
            fetchingFeedItems: FeedItemStore.fetchingFeedItems(),
            switchingFeedSources: FeedItemStore.switchingFeedSources()
          };
  },

  componentDidMount: function() {
    this.feedListener = FeedItemStore.addListener(this.handleReceivedFeeds);
    // this.feedSourceListener = FeedSourceStore.addListener(this.handleReceivedFeeds);
    // If we are refreshing the page, today's feeds will not have been loaded, we must do it manually
    // Else, we have just signed in, in which case today's feeds were already received
    if (FeedItemStore.loadedInitialData()) {
      this.handleReceivedFeeds();
    }
  },

  componentWillUnmount: function () {
    this.feedListener.remove();
    // this.feedSourceListener.remove();
  },

  handleReceivedFeeds: function() {
    this.setState({
      displayedFeeds: FeedItemStore.lastReceivedFeeds(),
      displayedFeedSourceId: FeedItemStore.lastReceivedId(),
      fetchingFeedItems: FeedItemStore.fetchingFeedItems(),
      switchingFeedSources: FeedItemStore.switchingFeedSources()
    });
  },

  displayingToday: function() {
    return this.state.displayedFeedSourceId === FeedItemConstants.TODAY_FEEDS_ID;
  },

  handleScroll: function(e) {
    var scrollTop = e.target.scrollTop;
    //change from viewFeedsHeader to viewFeedsNav depending on scroll position
    if (scrollTop > 27 && this.state.scrollView === false) {
      this.setState({scrollView: true});
    } else if (scrollTop < 27 && this.state.scrollView === true) {
      this.setState({scrollView: false});
    }
    //infinite scroll
    var scrolledToEnd = e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
    if (scrolledToEnd
        && !this.state.fetchingFeedItems
        && this.state.displayedFeedSourceId != FeedItemConstants.TODAY_FEEDS_ID) {
      ApiUtil.fetchFeedItems(this.state.displayedFeedSourceId,
                             FeedSourceStore.getFeedSourceNextPageById(this.state.displayedFeedSourceId));
      ApiActions.setFetchingFeedItemsToTrue();
    }
  },

  scrollToTop: function() {
    this.refs.viewFeeds.scrollTop = 0;
  },

  testClick: function() {
    //<div className="testClick" onClick={this.testClick}>Click me</div>
  },

  render: function() {
    var feedSource = FeedSourceStore.getFeedSourceById(this.state.displayedFeedSourceId);

    return (
      <div className="viewFeeds" ref="viewFeeds" onScroll={this.handleScroll}>
        <ViewFeedsNav displayedFeedSource={feedSource}
                      scrollView={this.state.scrollView}
                      scrollToTop={this.scrollToTop}
                      shrinkSideBar ={this.props.shrinkSideBar}/>
        <ViewFeedsHeader displayedFeedSource={feedSource} scrollView={this.state.scrollView}/>
        <FeedItemsIndex displayedFeeds={this.state.displayedFeeds}
                        today={this.displayingToday()}
                        fetchingFeedItems={this.state.fetchingFeedItems}
                        switchingFeedSources={this.state.switchingFeedSources}/>

      </div>
    );
  }
});

module.exports = ViewFeeds;
