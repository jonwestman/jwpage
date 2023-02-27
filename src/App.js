
import { NavbarComponent } from "./components/NavBar.js";
import { HomeComponent } from "./components/Home.js";
import { CvComponent } from "./components/Cv.js";
import {PortfolioComponent} from './components/Portfolio.js';
import {BrowserRouter as Router, HashRouter, Route, Routes} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {AboutMeComponent} from './components/AboutMe';
import {ContactComponent} from './components/Contact';
import { SecretComponent } from './components/Secret';

export default function App() {
  return (
    <div>
    <HashRouter>
    <NavbarComponent/>
      <Routes>
        <Route path="/" element={<HomeComponent/>} />
        <Route path="/cv" element={<CvComponent/>} />
        <Route path="/portfolio" element={<PortfolioComponent/>} />
        <Route path="/aboutme" element={<AboutMeComponent/>} />
        <Route path="/contact" element={<ContactComponent/>} />
      </Routes>
  </HashRouter>
  <SecretComponent/>  
  </div>
  )
}
