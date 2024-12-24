import React from "react";
import hfactorlogo from "../Assets/logos/hfactor_white.png";

function WelcomeScreen() {
  return (
    <div className="App">
      <header className="App-header">
        <img
          src={"assets/asset_white1.png"}
          className="App-logo"
          alt="logo"
        />
        {/* <strong className="App-title">Assets Edge</strong> */}
        <p>An Assets Management App</p>
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
