var React = require('react');
var FeedItemStore = require('../../stores/feedItemStore');
var classNames = require('classnames');
var LinkedStateMixin = require('react-addons-linked-state-mixin');

var ViewFeedsHeader = React.createClass({
  mixins: [LinkedStateMixin],

  getInitialState: function() {
    return {username: "", password: ""};
  },

  render: function() {
    var iconClasses = classNames({
      "fa": true,
      "categoryIcon": true,
      "fa-angle-down": true,
      "verticalCenter": true
    });

    return (
      <div className="viewFeedsHeader">
        <div id="viewFeedsHeaderTitle">{this.props.displayedFeedSource === undefined ?
                                       null :
                                       this.props.displayedFeedSource.title}
        </div>
        <ul className="viewFeedsHeaderNav">
          <li className="fa fa-check categoryIcon verticalCenter"></li>
          <li className="fa fa-refresh categoryIcon verticalCenter"></li>
          <li className="fa fa-cog categoryIcon verticalCenter"></li>
          <div className="inputIcon">
            <span className="fa fa-search verticalCenter"></span>
            <input type="text" name="username" id="username" placeholder="Search" valueLink={this.linkState('username')} />
          </div>
        </ul>

      </div>
    );
  }
});



module.exports = ViewFeedsHeader;
