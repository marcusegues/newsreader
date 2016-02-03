var React = require('react');
var classNames = require('classnames');

var GeneralCategories = React.createClass({

  render: function() {
    var iconClasses = classNames({
      "fa": true,
      "categoryIcon": true,
      "verticalCenter": true,
      "fa-angle-down": true
    });

    return (
      <div id="generalCategories">
        <div className="categoryItem">
          <span className="fa fa-bolt fa-fw categoryIcon verticalCenter"></span>
          <div id={"categoryTitle"}>Today</div>
        </div>
        <div className="categoryItem">
          <span className="fa fa-star-o fa-fw categoryIcon verticalCenter"></span>
          <div id={"categoryTitle"}>Must Reads</div>
        </div>
        <div className="categoryItem">
          <span className="fa fa-bookmark-o fa-fw categoryIcon verticalCenter"></span>
          <div id={"categoryTitle"}>Saved For Later</div>
        </div>
      </div>
    );
  }
});

module.exports = GeneralCategories;
