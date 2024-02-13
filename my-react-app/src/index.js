import react from "react";
import ReactDOM  from "react-dom";
import "./Home.css";
import "./Navbar.css";
import App from "./App";
import "./Profile.css";
import "./FAQ.css";
import "./Treatement.css";
import "./form.css";
import { BrowserRouter } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter><App/></BrowserRouter>
    
);