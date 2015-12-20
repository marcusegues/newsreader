var React = require('react');
var apiUtil = require('../util/apiUtil');

var NavigationBar = React.createClass({
  handleSignOut: function() {
    apiUtil.signOutUser();
  },

  render: function() {
    var signOutButton = "";
    if (window.CURRENT_USER_ID !== -1) {
      signOutButton = <li><a href="#" onClick={this.handleSignOut}>SignOut</a></li>;
    }

    return (
      <nav className="navbar navbar-inverse navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#">Project name</a>
          </div>
          <div id="navbar" className="collapse navbar-collapse">
            <ul className="nav navbar-nav">
              {signOutButton}
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }

});
module.exports = NavigationBar;
