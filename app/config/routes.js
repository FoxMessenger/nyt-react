// ----------------------------
// import dependencies
// ----------------------------
import Main from '../components/Main';
import React, {Component} from 'react';
import {
  HashRouter,
  Route,
} from 'react-router-dom';

// ----------------------------
// Routes
// ----------------------------

const routes = (

    <HashRouter>


	        <Route path="/" component={Main}>

	        </Route>


    </HashRouter>
);

export default router;