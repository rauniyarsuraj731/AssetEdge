import React from "react";
import hfactorlogo from "../Assets/logos/hfactor_white.png";

function WelcomeScreen() {
  return (
    <div className="App">
      <header className="App-header">
        <img
          src={hfactorlogo}
          className="App-logo"
          alt="logo"
        />
        <p className="App-title">Assets Management</p>
        <a
          className="App-link"
          href="/landingpage"
          target="_self"
          rel="noopener noreferrer"
        >
          Let's Explore
        </a>
      </header>
    </div>
  );
}

export default WelcomeScreen;
