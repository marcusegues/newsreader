var React = require('react');
var ApiUtil = require('../util/apiUtil');
var FeedSourceStore = require('../stores/FeedSourceStore');
var FeedSourceItem = require('./FeedSourceItem');

var CategoriesIndex = React.createClass({
  getInitialState: function() {
    return {feedSources: []};
  },

  componentDidMount: function() {
    ApiUtil.fetchUserFeedSources();
    FeedSourceStore.addListener(this.handleReceivedFeedSources);
  },

  handleReceivedFeedSources: function() {
    this.setState({feedSources: FeedSourceStore.all()});
  },

  render: function() {
    var feedSources = this.state.feedSources.map(function(feedSource, idx) {
      return <FeedSourceItem key={idx} feedSource={feedSource} />;
    });
    return (
      <div>
        {feedSources}
      </div>
    );
  }
});

module.exports = CategoriesIndex;
