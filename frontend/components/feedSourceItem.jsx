
var React = require('react');
var ApiUtil = require('../util/apiUtil');
var FeedItemStore = require('../stores/feedItemStore');
var ApiActions = require('../actions/apiActions');

var FeedSourceItem = React.createClass({
  getInitialState: function() {
    return {clicked: false, feeds: []};
  },

  componentDidMount: function() {
    FeedItemStore.addListener(this.handleReceivedFeeds);
    this.feedSource = this.props.feedSource;
  },

  handleReceivedFeeds: function(arg) {
    if (this.feedSource.Id === FeedItemStore.lastReceivedId)
      this.setState({feeds: FeedItemStore.all(this.feedSource.id)});

  },

  handleClick: function() {
    if (this.state.clicked === false) {
      ApiUtil.fetchFeedItems(this.feedSource.id);
      this.setState({clicked: true});
    } else {
      ApiActions.changeDisplayedFeeds(this.feedSource.id);
    }
  },

  render: function() {
    var title = this.props.feedSource.title;
    return (
      <div className="feedSource" onClick={this.handleClick}>
        {title}
      </div>
    );
  }
});

module.exports = FeedSourceItem;
