var React = require('react');
var FeedItemStore = require('../../stores/feedItemStore');
var decodeEntities = require('./decodeEntities');

var FeedItem = React.createClass({
  getInitialState: function() {
    return {displayContent: false};
  },

  componentWillReceiveProps: function() {
    this.setState({displayContent: false});
  },

  toggleShowFeed: function() {
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
    debugger;
    if (days < 1) {
      return Math.floor(days*24) + "h";
    } else {
      return Math.floor(days) + "d";
    }
  },

  render: function() {
    var title = decodeEntities(this.props.feed.title);
    var summary = decodeEntities(this.props.feed.summary);
    var content = this.state.displayContent === true ?
                  this.createMarkup(this.props.feed.content) :
                  null;
    var daysOld = this.daysOld();

    return (
      <div>
        <div className="feedTitle" onClick={this.toggleShowFeed}>
          <span className="fa fa-bookmark-o fa-fw categoryIcon verticalCenter"></span>
          <span className="title">{title}   <span className="summary">{summary}</span></span>
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
