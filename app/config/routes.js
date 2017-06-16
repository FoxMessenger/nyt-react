//the react library
var React = require('react');

//the react router
var router = require('react-router');

//route displaying
var Router = router.Router;

// routing client side without a Server
var hashHistory = router.hashHistory;

// catch-all routes for when you don't input a proper route
var IndexRoute = router.IndexRoute;

var Main = require('../components/Main')
var Results = require('../components/Results')
var Saved = require('../components/Saved')
var Search = require('../components/Search')


module.exports = (

	// note that the highest level is a Router, not Route
	<Router history={hashHistory}>
		<Route path='/' component={Main}>

			<Route path='Search' component={Search} />
				<Route path="Results" component={Results} />
        		<Route path="Saved" component={Saved} />
			
			
			<IndexRoute path="Search" component={Search} />

			<IndexRoute component={Main} />
		</Route>
	</Router>
)