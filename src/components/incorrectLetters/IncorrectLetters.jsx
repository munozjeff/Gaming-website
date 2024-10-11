import React from 'react';
import './IncorrectLettersStyle.css';

const IncorrectLetters = ({ incorrectLetters=[] }) => {
  return (
    <div className="incorrect-letters-container">
      <h3>Letras Incorrectas:</h3>
      <div className="incorrect-letters">
        {incorrectLetters.length > 0 ? (
          incorrectLetters.map((letter, index) => (
            <span key={index} className="incorrect-letter">{letter}</span>
          ))
        ) : (
          <p>No hay letras incorrectas aún.</p>
        )}
      </div>
    </div>
  );
};

export default IncorrectLetters;
