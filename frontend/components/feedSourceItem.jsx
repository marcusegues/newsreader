
var React = require('react');
var ApiUtil = require('../util/apiUtil');
var FeedItemStore = require('../stores/feedItemStore');
var ApiActions = require('../actions/apiActions');

var FeedSourceItem = React.createClass({
  getInitialState: function() {
    return {clicked: false, feeds: []};
  },

  componentWillMount: function() {
    FeedItemStore.addListener(this.handleReceivedFeeds);
    this.feedSource = this.props.feedSource;
  },

  handleReceivedFeeds: function() {
    debugger;
    if (this.feedSource.id === FeedItemStore.lastReceivedId())
      this.setState({feeds: FeedItemStore.all(this.feedSource.id)});

  },

  handleClick: function() {
    debugger;
    if (this.state.clicked === false) {
      ApiUtil.fetchFeedItems(this.feedSource.id);
      this.setState({clicked: true});
    } else {
      ApiActions.changeDisplayedFeeds(this.feedSource.id);
    }
  },

  render: function() {
    var title = this.props.feedSource.title;
    var faviconURL = "http://www.google.com/s2/favicons?domain=" + this.feedSource.url;
    return (
      <div className="feedSourceItem" onClick={this.handleClick}>
        <div><img src={faviconURL} /></div>
        <span className="feedSourceItemTitle">{title}</span>
        <span className="feedSourceItemCount">{this.state.feeds.length}</span>
      </div>
    );
  }
});

module.exports = FeedSourceItem;
