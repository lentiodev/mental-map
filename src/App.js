// import logo from './logo.svg';
// import './App.css';
import React from "react";
import "./App.css"; // import CSS file
 
 

function App() {
  return (
    <div className="App">
      {/* Nav Bar */}
      <nav>
        <ul>
          <li><a href="#">Categories</a></li>
          <li><a href="#">News</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contacts</a></li>
        </ul>
      </nav>
      
      {/* Logo */}
      <div className="logo">
        <img src="mental_health_logo.png" alt="Mental Health Logo" />
      </div>
      
      {/* Hero Section */}
      <div className="hero">
        <h1>Mental Map</h1>
      </div>
      
      {/* Footer */}
      <footer>
        <div className="contact-us">
          <a href="#">Contact Us</a>
        </div>
        <div className="social-icons">
          <a href="https://github.com"><i className="fab fa-github"></i></a>
          <a href="https://facebook.com"><i className="fab fa-facebook"></i></a>
          <br> 
          </br>
          <a href="https://instagram.com"><i className="fab fa-instagram"></i></a>
        </div>
      </footer>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>Demo Text</p>
        <p>Demo Text</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
