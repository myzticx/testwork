import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Nav from "./navbar";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="navbar">find a carer</div>
        <div className="navbar">for carers</div>
        <div className="navbar">for business partners</div>
        <div className="navbar">login</div>
        <div className="navbar">share your needs</div>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
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
