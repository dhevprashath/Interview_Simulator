import React from 'react';
import ReactDOM from 'react-dom';
import HomePage from './HomePage'; // Import your HomePage component
import SimulationPage from './SimulationPage'; // Import your SimulationPage component
import Login from './Login'; // Import Login component

import  {BrowserRouter, Switch, Route, Router} from 'react-router-dom'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
 
        <Router>
        <Route exact path="/" component={<Login />} />
        <Route exact path="/home" component={<HomePage />} />
        <Route exact   path="/simulation" component={<SimulationPage />} />
        </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
