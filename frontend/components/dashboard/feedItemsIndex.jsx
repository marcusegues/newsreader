var React = require('react');
var FeedItem = require('./feedItem');

var FeedItemsIndex = React.createClass({

  render: function() {
    var feeds = this.props.displayedFeeds.map(function(feed, idx) {
      return <FeedItem key={idx} feed={feed} display={false} />;
    });
    return (
      <div>
        {feeds}
      </div>
    );
  }
});

module.exports = FeedItemsIndex;
