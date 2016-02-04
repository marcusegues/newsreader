var React = require('react');
var FeedItemStore = require('../../stores/feedItemStore');
var decodeEntities = require('./decodeEntities');

var FeedItem = React.createClass({
  getInitialState: function() {
    return {display: false};
  },

  componentWillReceiveProps: function() {
    this.setState({display: false});
  },

  toggleShowFeed: function() {
    this.setState({display: !this.state.display});
  },

  createMarkup: function(html) {
    return {__html: html};
  },

  daysOld: function() {
    return Math.floor((Date.now()/1000 - new Date(this.props.feed.updated)/1000)/(24*3600))
  },

  render: function() {
    var title = decodeEntities(this.props.feed.title);
    var summary = decodeEntities(this.props.feed.summary);
    var content = this.state.display === true ?
                  this.createMarkup(this.props.feed.content) :
                  null;
    var daysOld = this.daysOld();

    return (
      <div>
        <div className="feedTitle" onClick={this.toggleShowFeed}>
          <span className="fa fa-bookmark-o fa-fw categoryIcon verticalCenter"></span>
          <span className="title">{title}   <span className="summary">{summary}</span></span>
          <span className="daysOld">{daysOld + "d"}</span>
        </div>
        <div className="displayed-feed"
             dangerouslySetInnerHTML={content}>
        </div>
      </div>
    );
  }
});

module.exports = FeedItem;
