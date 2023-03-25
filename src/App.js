import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Footer from "./components/Footer";
import "./index.css";

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        {/* Wrap Route elements in a Routes component */}
        <Routes>
  

          <Route path="about" element={<About />} />
        
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;