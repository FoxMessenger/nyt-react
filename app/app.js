// ----------------------------
// import dependencies
// ----------------------------
import React, {Component} from 'react';
// import routes from './config/routes';
import routes from '../controllers/routes'
import ReactDOM from 'react-dom';


import Main from "./components/Main";
import Search from "./components/children/Search";
import Results from "./components/children/Results";


// ----------------------------
// render routes
// ----------------------------


ReactDOM.render(routes, document.getElementById('app'));