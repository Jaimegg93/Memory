// src/App.js
import React from 'react';
import './App.css';
import Tablero from './componentes/Tablero';

const App = () => {
  return (
    <div className="App">
      <h1>Memory</h1>
      <Tablero />
    </div>
  );
};

export default App;