var React = require('react');
var ApiUtil = require('../../util/apiUtil');
var FeedSourceStore = require('../../stores/feedSourceStore');
var FeedSourceItem = require('./feedSourceItem');
var CategoryItem = require('./categoryItem');

var CategoriesIndex = React.createClass({
  getInitialState: function() {
    return {
            feedSources: []
          };
  },

  componentDidMount: function() {
    this.feedStoreListener = FeedSourceStore.addListener(this.handleReceivedFeedSources);
    ApiUtil.fetchUserFeedSources();
  },

  componentWillUnmount: function() {
    this.feedStoreListener.remove();
  },

  handleReceivedFeedSources: function() {

    this.setState({feedSources: FeedSourceStore.all()});
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
