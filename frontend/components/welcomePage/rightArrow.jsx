var React = require('react');
var classNames = require('classnames');

var RightArrow = React.createClass({
  handleClick: function() {
    this.props.toggleArrowClicked();
  },

  render: function() {
    var arrowClasses = classNames({
      button: true,
      style2: true,
      right: true,
      arrowClicked: this.props.arrowClicked
    });

    return (
        <a onClick={this.handleClick} className={arrowClasses}>Learn More</a>
    );
  }
});

module.exports = RightArrow;
