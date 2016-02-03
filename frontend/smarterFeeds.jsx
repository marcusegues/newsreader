var React = require('react');
var ReactDOM = require('react-dom');

var App = require('./components/App');
var Dashboard = require('./components/dashboard/dashboard');
var Welcome = require('./components/welcomePage/welcome');
var ViewFeeds = require('./components/dashboard/viewFeeds');
var addContent = require('./components/dashboard/addContent');

var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;

var routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Welcome} />
    <Route path="dashboard" component={Dashboard}>
      <IndexRoute component={ViewFeeds} />
      <Route path="addContent" component={addContent} />
    </Route>
  </Route>
);

document.addEventListener("DOMContentLoaded", function() {
  var root = document.getElementById('content');
  ReactDOM.render(<Router>{routes}</Router>, root);
});
