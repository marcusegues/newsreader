var React = require('react');
var classNames = require('classnames');
var RightArrow = require('./rightArrow');
var SignUpForm = require('./signupForm');

var WelcomeMainMessage = React.createClass({

  openSignUpForm: function() {
    this.props.toggleSignUpModalVisible(false);
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
            <a className="clickButton" onClick={this.openSignUpForm}>Sign up</a>
          </p>
          <RightArrow arrowClicked={this.props.arrowClicked}
                      toggleArrowClicked={this.props.toggleArrowClicked} />
        </div>
      </header>
    );
  }
});

module.exports = WelcomeMainMessage;
