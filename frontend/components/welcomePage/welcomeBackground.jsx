var React = require('react');
var Background = require('./background');
var classNames = require('classnames');

var WelcomeBackground = React.createClass({
  getInitialState: function() {
    return (
        {
          images: {
            'http://res.cloudinary.com/dolgs87zk/image/upload/v1452932055/swiss-alps-early-in-the-morning-1080p-nature-desktop-wallpaper-27460_ididgk.jpg': 'center',
            'http://res.cloudinary.com/dolgs87zk/image/upload/v1452907456/basel_ycx01g.jpg': 'center',
            'http://res.cloudinary.com/dolgs87zk/image/upload/v1452931788/Zurich-Switzerland-Building-Roof-Top-Sunset-Sky-Clouds-WallpapersByte-com-1920x1080_lithe2.jpg': 'center'
          },
          delay: 6000,
          currentVisible: [],
          currentTop: 0
        }
    );
  },

  componentDidMount: function() {
    setTimeout(function() {
      this.setState({currentVisible: [0]});
      var $body = document.querySelector('body');
      $body.classList.add('fadeToBlack');
    }.bind(this), 1);

    setInterval(function() {
      var currentTop = this.state.currentTop + 1;
      if (currentTop >= Object.keys(this.state.images).length) {
        currentTop = 0;
      }
      var currentVisible = this.state.currentVisible;
      currentVisible.push(currentTop);
      this.setState({currentTop: currentTop, currentVisible: currentVisible});

      // Hide last image after a short delay.
      setTimeout(function() {
        currentVisible.shift();
        this.setState({currentVisible: currentVisible});
        }.bind(this), this.state.delay / 2);
    }.bind(this), this.state.delay);
  },

  render: function() {
    var backgrounds = Object.keys(this.state.images).map(function(imageURL, i) {
      return (
        <Background visible={this.state.currentVisible.indexOf(i) != -1}
                    topIm={this.state.currentTop === i}
                    imageURL={imageURL}
                    key={i}/>
      );
    }.bind(this));
    var bgClass = classNames({
      'bg1': true,
      'arrowClicked': this.props.arrowClicked,
    });
    return (
      <div className={bgClass} id="bg">
        {backgrounds}
      </div>
    );
  }
});

module.exports = WelcomeBackground;
