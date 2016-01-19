var React = require('react');
var classNames = require('classnames');
var RightArrow = require('./rightArrow');

var WelcomeMainMessage = React.createClass({
  render: function() {
    var divClasses = classNames({
      'signUp_or_learnMore': true
    });

    var transitions = classNames({
      'arrowClicked': this.props.arrowClicked,
    });

    return (
      <header id="header">
        <h1>Swissfeeds.</h1>
        <p>{"A simple newsreader for all your daily reading"}<br />
        {"In need of a break? Explore beautiful"} <a href="http://html5up.net">swiss mountains</a>.</p>

        <div className={divClasses}>
          <p className="subMessage" >
            <a className="clickButton" onclick={this.handleClick}>Sign up</a></p>
          <RightArrow arrowClicked={this.props.arrowClicked}
                      toggleArrowClicked={this.props.toggleArrowClicked} />
        </div>
      </header>
    );
  }
});

module.exports = WelcomeMainMessage;
