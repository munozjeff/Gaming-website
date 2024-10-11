import React from 'react';
import './keyboard.css';

const Keyboard = ({ onKeyPress =()=>{} }) => {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  return (
    <div className="keyboard">
      {letters.map((letter, index) => (
        <button key={index} onClick={() => onKeyPress(letter)} className="key">
          {letter}
        </button>
      ))}
    </div>
  );
};

export default Keyboard;
