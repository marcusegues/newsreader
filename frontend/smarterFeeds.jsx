var React = require('react');
var ReactDOM = require('react-dom');

var App = require('./components/App');
var Dashboard = require('./components/dashboard');
var Welcome = require('./components/welcomePage/welcome');

var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;

var routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Welcome} />
    <Route path="dashboard" component={Dashboard}>
    </Route>
  </Route>
);

document.addEventListener("DOMContentLoaded", function() {
  var root = document.getElementById('content');
  ReactDOM.render(<Router>{routes}</Router>, root);
});
