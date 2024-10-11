import React from 'react';
import './GameOverStyle.css';

const GameOver = ({ onRestart, message }) => {
  return (
    <div className="game-over-container">
      <div className="game-over-message">
        <h1>¡Has Perdido!</h1>
        <p>{message}</p>
        <button className="restart-button" onClick={onRestart}>Reintentar</button>
      </div>
    </div>
  );
};

export default GameOver;
