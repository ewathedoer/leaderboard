var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var browserHistory = ReactRouter.browserHistory;
var IndexRoute = ReactRouter.IndexRoute;
var Main = require('../components/Main');
var LastThirtyDaysContainer = require('../containers/LastThirtyDaysContainer');
var AllTimeContainer = require('../containers/AllTimeContainer');


var routes = (
  <Router history={browserHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={Main} />
      <Route path='last-30-days' component={LastThirtyDaysContainer} />
      <Route path='all-time' component={AllTimeContainer} />
    </Route>
  </Router>
);

module.exports = routes;