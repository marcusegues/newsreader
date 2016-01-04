var React = require('react');


var WelcomeImage = React.createClass({
  getInitialState: function() {
    return {currentVideoIdx: 0, signInOpen: false};
  },

  componentWillMount: function() {
    console.log("willmount");
    // this.videoSource = new Array();
    // this.videoSource[0]='http://res.cloudinary.com/dolgs87zk/video/upload/v1451026712/MyFirstMovie_kyjyuy.mp4';
    // // this.videoSource[1]='http://res.cloudinary.com/dolgs87zk/video/upload/v1450996737/Swiss_Time_360_jbeyuy.mp4';
    // this.videoCount = this.videoSource.length;
  },

  componentDidMount: function() {
    console.log("didmount");
  },

  handleVideoEnd: function() {
    console.log("ended");
    // alert("hello");
    // var i = this.state.currentVideoIdx + 1;
    // if (i === (this.videoCount)) {
    //   i = 0;
    // }
    // document.getElementById("fullbgvideo").setAttribute("src", this.videoSource[i]);
    // document.getElementById("fullbgvideo").load();
    // this.setState({currentVideoIdx: i});

  },

  render: function() {

    return (
      <div>
        <div className="welcome">
          <img className="image" src="matterhorn_clear.jpg" />
        </div>

      </div>
    );
  }
});

module.exports = WelcomeImage;
