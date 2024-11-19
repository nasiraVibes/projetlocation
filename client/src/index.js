import ReactDOM from 'react-dom';
//import './index.css';
import Layout from './Layout';
import Inscription from './Inscription';
import Login from './Login';
import Addvoiture from './Addvoiture';
import Affichagevoiture from './Afichagevoiture';

import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

export default function App(){
  return (
    <BrowserRouter>
       <Routes>
        <Route path="/" element={<Layout />}> 
         <Route path="/inscription" element ={<Inscription />} />
         <Route path="/login" element={<Login />} />
         <Route path="/addvoiture" element={<Addvoiture />} />
         <Route path="/voitures" element={<Affichagevoiture />} />
        </Route>
       </Routes>
    </BrowserRouter>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
