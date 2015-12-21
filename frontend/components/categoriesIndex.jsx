var React = require('react');
var ApiUtil = require('../util/apiUtil');
var FeedSourceStore = require('../stores/feedSourceStore');
var FeedSourceItem = require('./feedSourceItem');

var CategoriesIndex = React.createClass({
  getInitialState: function() {
    return {feedSources: []};
  },

  componentWillMount: function() {
    // console.log("Mounted categories index");
  },

  componentDidMount: function() {
    this.feedStoreListener = FeedSourceStore.addListener(this.handleReceivedFeedSources);
    debugger;
    ApiUtil.fetchUserFeedSources();
  },

  componentWillUnmount: function() {
    this.feedStoreListener.remove();
  },

  handleReceivedFeedSources: function() {
    debugger;
    this.setState({feedSources: FeedSourceStore.all()});
    debugger;
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
