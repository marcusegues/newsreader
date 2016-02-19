var React = require('react');
var FeedItem = require('./feedItem');

var FeedItemsIndex = React.createClass({

  render: function() {
    var feeds = this.props.displayedFeeds.map(function(feed, idx) {
      return <FeedItem key={idx} feed={feed} displayContent={false} today={this.props.today}/>;
    }.bind(this));
    return (
      <div id="loadingDiv">
        {this.props.fetchingFeedItems ?
         <div id="loadingIcon"><i className="fa fa-spinner fa-pulse fa-2x"></i>
         <span id="loadingIconText">{"Loading..."}</span></div> :
         null}
        {this.props.switchingFeedSources ? null : feeds}
      </div>
    );
  }
});

module.exports = FeedItemsIndex;
