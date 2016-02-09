var React = require('react');
var FeedItem = require('./feedItem');

var FeedItemsIndex = React.createClass({

  render: function() {
    var feeds = this.props.displayedFeeds.map(function(feed, idx) {
      return <FeedItem key={idx} feed={feed} displayContent={false} today={this.props.today}/>;
    }.bind(this));
    return (
      <div>
        {feeds}
      </div>
    );
  }
});

module.exports = FeedItemsIndex;
