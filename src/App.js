import React from 'react';
import logo from './logo.svg';
import './App.css';
import Clock from './Clock.js'

const name = "Ruphine"
function App() {
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Welcome to React </h2>
        <p> Hi {name}</p>
       </div>

       <Clock />

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
    </div>
  );
}

export default App;
