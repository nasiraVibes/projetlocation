import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import './Login.css';

function Login() {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:6061/login", values)
      .then((res) => {
        console.log(res);
        if (res.data.Status === "Success") {
          navigate("/addvoiture");
        } else {
          alert(res.data.Error);
        }
      })
      .catch((err) => console.log("Erreur lors de la connexion :", err));
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Email</label>
          <input
            type="email"
            name="email"
            onChange={(e) => setValues({ ...values, email: e.target.value })}
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            name="password"
            onChange={(e) => setValues({ ...values, password: e.target.value })}
            className="form-control"
          />
        </div>
        <button type="submit">Login</button>
        <br />
        <Link to="/inscription">Inscrire</Link>
      </form>
    </div>
  );
}

export default Login;
