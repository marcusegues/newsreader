var React = require('react');

var FeedOptions = React.createClass({
  createNewFeedSource: function() {

  },

  render: function() {
    return (
      <div className="row feedOptions">
        <div className="col-xs-4">
          <button onClick={this.createNewFeedSource}>+</button>
        </div>
      </div>
    );
  }
});

module.exports = FeedOptions;
