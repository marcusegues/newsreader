var React = require('react');
var ReactDOM = require('react-dom');
var WelcomeApp = require('./components/welcomeApp');
var WelcomeImage = require('./components/welcomeImage');
var UserForm = require('./components/userForm');

var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;

var routes = (
  <Route path="/" component={WelcomeApp}>
    <IndexRoute component={WelcomeImage} />
    <IndexRoute component={UserForm} />
  </Route>
);

document.addEventListener("DOMContentLoaded", function() {
  var root = document.getElementById('content');
  ReactDOM.render(<Router>{routes}</Router>, root);
});
