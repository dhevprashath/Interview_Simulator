// App.js
import React from 'react';
import { BrowserRouter, Route, Router } from 'react-router-dom';
import HomePage from './HomePage'; // Import your HomePage component
import SimulationPage from './SimulationPage'; // Import your SimulationPage component
import Login from './Login'; // Import Login component

const App = () => {
  return (
   // <BrowserRouter>
    <Router>
        <Route path="/Login" element={<Login />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/simulation" element={<SimulationPage />} />
    </Router>
   // </BrowserRouter>
  );
};

export default App;
