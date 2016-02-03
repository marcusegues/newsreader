var React = require('react');
var classNames = require('classnames');

var CategoryItem = React.createClass({
  getInitialState: function() {
    return (
      { categoryOpen: true }
    );
  },

  handleClick: function() {
    var newState = this.state.categoryOpen ? false : true;
    this.setState({categoryOpen: newState});
  },

  render: function() {
    var iconClasses = classNames({
      "fa": true,
      "categoryIcon": true,
      "fa-angle-down": this.state.categoryOpen,
      "fa-angle-right": !this.state.categoryOpen
    });

    return (
      <div>
        <ul className="categoryItem">
          <li onClick={this.handleClick} className={iconClasses}></li>
          <li id={"categoryTitle"}>{this.props.title}</li>
        </ul>
        <ul>
          {this.state.categoryOpen ? this.props.feedSources : null}
        </ul>
      </div>
    );
  }

});

module.exports = CategoryItem;
