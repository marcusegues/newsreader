
var React = require('react');
var ApiUtil = require('../../util/apiUtil');
var FeedItemStore = require('../../stores/feedItemStore');
var FeedSourceStore = require('../../stores/feedSourceStore');
var ApiActions = require('../../actions/apiActions');

var FeedSourceItem = React.createClass({
  getInitialState: function() {
    return {loaded: false, unreadCount: 0};
  },

  componentWillMount: function() {
    FeedItemStore.addListener(this.handleReceivedFeeds);
  },

  componentDidMount: function() {
    if (FeedItemStore.loadedInitialData) {
      this.handleReceivedFeeds();
    }
  },

  loadedInFeedStore: function() {
    return (FeedItemStore.areFeedSourceItemsLoaded(this.props.feedSource.id));
  },

  handleReceivedFeeds: function() {
    this.setState({unreadCount: FeedItemStore.unreadCount(this.props.feedSource.id)});
    if (this.loadedInFeedStore()) {
      this.setState({loaded: true});
    }
  },

  handleClick: function() {
    if (this.state.loaded === false) {
      ApiActions.switchFeedSource(this.props.feedSource.id);
      ApiUtil.fetchFeedItems(this.props.feedSource.id,
                             FeedSourceStore.getFeedSourceNextPageById(this.props.feedSource.id));
      this.setState({loaded: true});
    } else {
      ApiActions.changeDisplayedFeeds(this.props.feedSource.id);
    }
  },

  render: function() {
    var title = this.props.feedSource.title;
    var faviconURL = "http://www.google.com/s2/favicons?domain=" + this.props.feedSource.url;
    return (
      <li className="feedSourceItem" onClick={this.handleClick}>
        <span className="verticalCenter"><img src={faviconURL} /></span>
        <span className="feedSourceItemTitle">{title}</span>
        <span className="feedSourceItemCount">{this.state.unreadCount === 0 ? '' : this.state.unreadCount}</span>
      </li>
    );
  }
});

module.exports = FeedSourceItem;
