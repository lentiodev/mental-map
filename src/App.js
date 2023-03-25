import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
//import NavBar from "./components/NavBar";
import About from "./components/About";
//import Footer from "./components/Footer";
import Home from './components/Home';

import Anxiety from './pages/Anxiety';
import Depression from './pages/Depression';
import Autism from './pages/Autism';
import Addiction from './pages/Addiction';

import "./index.css";

function App() {
  return (
    <Router>
 
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="/anxiety" element={<Anxiety />} />
        <Route path="/depression" element={<Depression />} />
        <Route path="/autism" element={<Autism />} />
        <Route path="/addiction" element={<Addiction />} />

        </Routes>
    </Router>
  );
}

export default App;