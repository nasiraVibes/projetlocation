import React from 'react';
import Navbar from './Navbar';
import Inscription from './Inscription';
import Login from './Login';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <div className="image-container">
          <img 
            src="https://img.freepik.com/photos-premium/gros-plan-du-vendeur-voiture-serrant-main-du-client-remettant-ses-cles-voiture-se-tenant-debout-dans-salon-voiture_232070-11865.jpg?w=740" 
            alt="Location de voiture" 
            className="car-rental-image" 
          />
        </div>

        <div className="content">
          <Routes>
            <Route path="/inscription" element={<Inscription />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
