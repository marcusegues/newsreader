var React = require('react');
var classNames = require('classnames');

var Background = React.createClass({

  render: function() {

    var bgClass = classNames({
      'visible': this.props.visible,
      'top': this.props.topIm,
    });

    var style = {
      backgroundImage: 'url(' + this.props.imageURL + ')',
      backgroundPosition: 'center'
    };

    return (
      <div className={bgClass} style={style}>
      </div>
    );
  }
});

module.exports = Background;
