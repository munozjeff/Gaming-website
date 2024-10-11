import React from 'react';
import './wordDisplayStyle.css';

const WordDisplay = ({ word = []}) => {
  return (
    <div className="word-display">
      {word.map((letter, index) => (
        <span key={index} className="letter">
          {letter}
        </span>
      ))}
    </div>
  );
};

export default WordDisplay;
