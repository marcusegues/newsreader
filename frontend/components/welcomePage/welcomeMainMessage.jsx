var React = require('react');
var classNames = require('classnames');
var RightArrow = require('./rightArrow');
var SignUpForm = require('./signupForm');
var ApiUtil = require('../../util/apiUtil');

var WelcomeMainMessage = React.createClass({
  signInDemo: function() {
    ApiUtil.signInGuest();
  },

  render: function() {
    var divClasses = classNames({
      'signUp_or_learnMore': true
    });

    var transitions = classNames({
      'arrowClicked': this.props.arrowClicked,
    });

    return (
      <header className={transitions} id="header">
        <h1>Swissfeeds.</h1>
        <p>{"A simple newsreader for all your daily reading"}<br />
        {"Need a break? Discover beautiful"} <a>swiss mountains</a></p>

        <div className={divClasses}>
          <p className="subMessage" >
            <a className="clickButton" onClick={this.signInDemo}>Demo</a>
          </p>

        </div>
      </header>
    );
    // <RightArrow arrowClicked={this.props.arrowClicked}
    //             toggleArrowClicked={this.props.toggleArrowClicked} />
  }
});

module.exports = WelcomeMainMessage;
