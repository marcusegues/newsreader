var React = require('react');
var FeedItemStore = require('../stores/feedItemStore');

var FeedItem = React.createClass({
  render: function() {
    var title = this.props.feed.title;
    return (
      <div>
        {title}
      </div>
    );
  }
});

module.exports = FeedItem;
