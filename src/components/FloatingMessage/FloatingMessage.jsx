import React from 'react';
import './floatingMessageStyle.css';

const FloatingMessage = ({ message, onClose }) => {
  return (
    <div className="floating-message">
      <span className="message-text">{message}</span>
      <button className="close-button" onClick={onClose}>
        &times;
      </button>
    </div>
  );
};

export default FloatingMessage;
