import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Inscription.css';

function Inscription() {
  const [values, setValues] = useState({
    cin: '',
    nom: '',
    prenom: '',
    email: '',
    tel: '',
    address: '',
    username: '',
    password: ''
  });
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Données envoyées :", values); // Vérifier les données avant de les envoyer
    axios.post('http://localhost:6061/inscription', values)
      .then(res => {
        if (res.data.Status === "Success") {
          console.log("Inscription réussie");
          navigate('/login');
        } else {
          alert(res.data.Error || "Erreur : Veuillez vérifier vos informations.");
        }
      })
      .catch(err => console.log("Erreur lors de l'envoi du formulaire :", err));
  };

  return (
    <div className="inscription-container">
      <h2>Inscription</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>CIN</label>
          <input type="text" name="cin" onChange={e => setValues({ ...values, cin: e.target.value })} className="form-control" />
        </div>
        <div className="form-group">
          <label>Nom</label>
          <input type="text" name="nom" onChange={e => setValues({ ...values, nom: e.target.value })} className="form-control" />
        </div>
        <div className="form-group">
          <label>Prenom</label>
          <input type="text" name="prenom" onChange={e => setValues({ ...values, prenom: e.target.value })} className="form-control" />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input type="email" name="email" onChange={e => setValues({ ...values, email: e.target.value })} className="form-control" />
        </div>
        <div className="form-group">
          <label>Telephone</label>
          <input type="tel" name="tel" onChange={e => setValues({ ...values, tel: e.target.value })} className="form-control" />
        </div>
        <div className="form-group">
          <label>Address</label>
          <input type="text" name="address" onChange={e => setValues({ ...values, address: e.target.value })} className="form-control" />
        </div>
        <div className="form-group">
          <label>Username</label>
          <input type="text" name="username" onChange={e => setValues({ ...values, username: e.target.value })} className="form-control" />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" name="password" onChange={e => setValues({ ...values, password: e.target.value })} className="form-control" />
        </div>
        <button type="submit">Inscription</button><br />
        <Link to="/login">Login</Link>
      </form>
    </div>
  );
}

export default Inscription;
