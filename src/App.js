// src/App.js
import React from 'react';
import Game from './Game';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <h1>Tic Tac Toe</h1>
      <Game />
    </div>
  );
};

export default App;