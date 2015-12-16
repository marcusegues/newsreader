var React = require('react');
var ReactDOM = require('react-dom');
var WelcomeApp = require('./components/welcomeApp');

document.addEventListener("DOMContentLoaded", function() {
  var root = document.getElementById('content');
  ReactDOM.render(<WelcomeApp />, root);
});
