import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Affichagevoiture.css';

function Affichagevoiture() {
  const [voitures, setVoitures] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:6061/voitures')
      .then(res => {
        if (res.data.Status === 'Success') {
          setVoitures(res.data.Data);
        } else {
          alert('Erreur lors du chargement des données');
        }
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="affichage-container">
      <h2>Liste des Voitures</h2>
      <div className="voitures-grid">
        {voitures.map((voiture, index) => (
          <div key={index} className="voiture-card">
            {console.log(voiture)}
            <img src={voiture.img} alt={voiture.marque} className="voiture-img"/>
            <h3>{voiture.marque} - {voiture.modele}</h3>
            <p>Prix : {voiture.prix} DH</p>
            <button className="louer-btn">Louer</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Affichagevoiture;
