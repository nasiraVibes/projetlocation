import React from 'react';
import { Link , useNavigate} from 'react-router-dom';
import './Navbar.css';



function Navbar() {
  const navigate =useNavigate();
  const handleSubmit =(event)=>{
    navigate('/inscription')
  }
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <p>Location de voitures rapide et fiable</p>
        <p>Contact: +33 1 23 45 67 89</p>
      </div>
      
      <div className="navbar-links" onClick={handleSubmit}>
         <Link  to="/inscription" className="nav-link" >Inscription</Link>
         <Link to="/login" className="nav-link">Login</Link>
      </div>

      <div className="navbar-right">
        <h1 className="logo">LocVoiture</h1>
      </div>
    </nav>
  );
}

export default Navbar;

