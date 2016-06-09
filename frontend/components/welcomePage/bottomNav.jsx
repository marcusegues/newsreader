var React = require('react');

var BottomNav = React.createClass({
  openSignInForm: function() {
    this.props.toggleSignInModalVisible(false);
  },

  render: function() {
    return (
      <header id="bottomNav">
        <h1><a href="index.html"><strong>SF</strong> Swiss Feeds re</a></h1>
        <nav>
          <ul>
              <li><a href="#" className="icon fa-info-circle">About</a></li>
              <li><a onClick={this.openSignInForm}>Sign In</a></li>
          </ul>
        </nav>
      </header>
    );
  }
});

module.exports = BottomNav;
