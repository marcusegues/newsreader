var React = require('react');

var BottomNav = React.createClass({

  render: function() {
    return (
      <header id="bottomNav">
        <h1><a href="index.html"><strong>SF</strong> Ramona Ambuehl, hottie</a></h1>
        <nav>
          <ul>
              <li><a href="#" className="icon fa-info-circle">About</a></li>
          </ul>
        </nav>
      </header>
    );
  }
});

module.exports = BottomNav;
