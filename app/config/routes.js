// dependencies
//import
import React from 'react';
import ReactDOM from 'react-dom';
import {
  HashRouter,
  Route,
  Link
} from 'react-router-dom';

// var React = require('react');
// var router = require('react-router');


// to diplay individual routes
// var Route = router.Route;

// too pass configuration as props
// var Router = router.Router;



// catch all route
// var IndexRoute = router.IndexRoute;

// ----------------------------
// Routes
// ----------------------------
var Main = require('../components/Main');

module.exports = (

    <HashRouter>

        <Route path="/" component={Main}>
        </Route>
		

    </HashRouter>
);