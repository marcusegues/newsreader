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
        <div className="categoryItem">
          <span onClick={this.handleClick} className={iconClasses}></span>
          <div id={"categoryTitle"}>{this.props.title}</div>
        </div>
        <ul>
          {this.state.categoryOpen ? this.props.feedSources : null}
        </ul>
      </div>
    );
  }

});

module.exports = CategoryItem;
