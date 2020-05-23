import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './Login'
import Registro from './Registro'


function App() {
  let titulo = "React app"
  let nombre = "Test"
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React dsaadasd
          <Login title={titulo} />
          <Registro title={titulo} nombre={nombre} />
        </a>
      </header>
    </div>
  );
}

export default App;
