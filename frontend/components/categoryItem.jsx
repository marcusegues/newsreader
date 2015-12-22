var React = require('react');

var CategoryItem = React.createClass({
  render: function() {
    return (
      <div>
        {this.props.title}
      </div>
    );
  }

});

module.exports = CategoryItem;
