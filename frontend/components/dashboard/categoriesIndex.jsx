var React = require('react');
var ApiUtil = require('../../util/apiUtil');
var FeedSourceStore = require('../../stores/feedSourceStore');
var FeedSourceItem = require('./feedSourceItem');
var CategoryItem = require('./categoryItem');

var CategoriesIndex = React.createClass({
  getInitialState: function() {
    return {
            feedSources: [],
            initialUpdateRequestsSent: false
          };
  },

  componentDidMount: function() {
    this.feedStoreListener = FeedSourceStore.addListener(this.handleReceivedFeedSources);
    if (!FeedSourceStore.feedSourcesLoaded()) {
      ApiUtil.fetchUserFeedSources();
    }

    if (FeedSourceStore.feedSourcesLoaded() && !this.state.initialUpdateRequestsSent) {
      debugger;
      ApiUtil.updateAllFeeds();
      this.setState({initialUpdateRequestsSent: true});
    }
  },

  componentWillUnmount: function() {
    this.feedStoreListener.remove();
  },

  handleReceivedFeedSources: function() {
    this.setState({feedSources: FeedSourceStore.all()});
    if (!this.state.initialUpdateRequestsSent) {
      debugger;
      ApiUtil.updateAllFeeds();
      this.setState({initialUpdateRequestsSent: true});
    }
  },

  render: function() {
    var categories = FeedSourceStore.all();
    var categoriesWithFeedSources = Object.keys(categories).map(function(category, idx_cat) {
      var list = categories[category].map(function(feedSource, idx_fs) {
        return <FeedSourceItem key={idx_fs} feedSource={feedSource} />;
      });
      return (
        <div className="category" key={idx_cat}>
          <CategoryItem title={category} feedSources={list} />
        </div>
      );
    });

    return (
      <div id="categoriesIndex">
        {categoriesWithFeedSources}
      </div>
    );
  }
});

module.exports = CategoriesIndex;
