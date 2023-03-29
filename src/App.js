import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import QuoteGenerator from "./components/QuoteGenerator";
import Anxiety from "./pages/Anxiety";
import Depression from "./pages/Depression";
import Autism from "./pages/Autism";
import Addiction from "./pages/Addiction";
import Contact from "./components/Contact";
import ArticlesSection from "./ArticlesSection";

import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="articles" element={<ArticlesSection />} />
        <Route path="contact" element = {<Contact />} />
        <Route path="QuoteGenerator" element={<QuoteGenerator />} />
        <Route path="/anxiety" element={<Anxiety />} />
        <Route path="/depression" element={<Depression />} />
        <Route path="/autism" element={<Autism />} />
        <Route path="/addiction" element={<Addiction />} />
      </Routes>
    </Router>
  );
}

export default App;
