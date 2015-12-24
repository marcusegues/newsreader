var React = require('react');
var UserForm = require('./userForm');

var WelcomeImage = React.createClass({

  render: function() {
    return (
      <div>
        <div className="welcome">
          <div className="welcomeImage">
          </div>
          <video loop muted autoPlay poster="/pilatus.jpg" className="full-bg-video">
            <source src="http://res.cloudinary.com/dolgs87zk/video/upload/v1450996737/Swiss_Time_360_jbeyuy.mp4" async/>
          </video>
        </div>
      </div>
    );
  }
});

module.exports = WelcomeImage;
