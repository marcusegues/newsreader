var React = require('react');
var FeedItemStore = require('../../stores/feedItemStore');
var FeedSourceStore = require('../../stores/feedSourceStore');
var usefulFunctions = require('../../util/usefulFunctions');
var classNames = require('classnames');
var ApiUtil = require('../../util/apiUtil');
var ApiActions = require('../../actions/apiActions');

var FeedItem = React.createClass({
  getInitialState: function() {
    return {displayContent: false};
  },

  componentWillReceiveProps: function(nextProps) {
    if (nextProps.feed !== this.props.feed) {
      this.setState({displayContent: false});
    }
  },

  setUnreadToFalse: function() {
    if (this.props.feed.unread === true) {
      ApiActions.decrementUnread(this.props.feed.feed_source_id);
      ApiUtil.setUnreadToFalse(this.props.feed.id);
      this.props.feed.unread = false;
    }
  },

  toggleShowFeed: function() {
    this.setUnreadToFalse();
    this.setState({displayContent: !this.state.displayContent});
  },

  createMarkup: function(html) {
    return {__html: html};
  },

  daysOld: function() {
    var lastUpdated = this.props.feed.updated ?
                      this.props.feed.updated :
                      this.props.feed.published;

    var days = (Date.now()/1000 - new Date(lastUpdated)/1000)/(24*3600);

    if (days < 1) {
      return Math.floor(days*24) + "h";
    } else {
      return Math.floor(days) + "d";
    }
  },

  saveForLater: function(e) {
    e.stopPropagation();
    this.props.feed.saved_for_later = !this.props.feed.saved_for_later;
    this.forceUpdate();
    ApiUtil.saveFeedForLater(this.props.feed.id);
  },

  render: function() {
    var title = usefulFunctions.decodeEntities(this.props.feed.title);
    var summary = usefulFunctions.decodeEntities(this.props.feed.summary);
    var content = this.state.displayContent === true ?
                  this.createMarkup(this.props.feed.content) :
                  null;
    var daysOld = this.daysOld();

    // this should be shown any time we need to display feeds from different feedSources (like when we
    // display feeds from today or saved for later)

    var showFeedSource = (this.props.today && FeedSourceStore.feedSourcesLoaded()) ?
      <span className="feedTitleFeedSource">{FeedSourceStore.getFeedSourceById(this.props.feed.feed_source_id).title}</span> :
      null;

    var titleClasses = classNames({
      "title": !this.props.today,
      "titleWithFeedSource": this.props.today
    });

    var feedTitleClasses = classNames({
      "feedTitle": true,
      "unread": this.props.feed.unread,
      "feedTitleHover": !this.props.feed.saved_for_later,
      "savedForLater": this.props.feed.saved_for_later
    });

    var bookMarkIconClasses = classNames({
      "fa": true,
      "fa-bookmark-o": true,
      "fa-fw": true,
      // "icon-bookmark": true,
      "categoryIcon": true,
      "verticalCenter": true,
      "bookMarkHighlight": this.props.feed.saved_for_later
    });

    return (
      <div>
        <div className={feedTitleClasses} onClick={this.toggleShowFeed}>
          <span className={bookMarkIconClasses} onClick={this.saveForLater}></span>
          {showFeedSource}
          <span className={titleClasses}>{title}<span className="summary">{summary}</span></span>
          <span className="daysOld">{daysOld}</span>
        </div>
        <div className="displayed-feed"
             dangerouslySetInnerHTML={content}>
        </div>
      </div>
    );
  }
});

module.exports = FeedItem;
