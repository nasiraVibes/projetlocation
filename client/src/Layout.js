import { Link, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    
    <div className="app">
          <h1>Bienvenue sur notre site de location de voitures</h1>
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/inscription">Inscription</Link>
            </li>
          </ul>
        </nav>
      </header>

      <div className="image-container">
        <img
          src="https://img.freepik.com/photos-premium/gros-plan-du-vendeur-voiture-serrant-main-du-client-remettant-ses-cles-voiture-se-tenant-debout-dans-salon-voiture_232070-11865.jpg?w=740"
          alt="Location de voiture"
          className="car-rental-image"
        />
      </div>
      <Outlet />
    </div>
  );
};

export default Layout;
