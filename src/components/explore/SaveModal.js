import React from 'react';
import './Modal.css';

export const Modal = ({ onClose, children }) => {
  const handleClickOutside = (e) => {
    if (e.target.className === 'modal-background') {
      onClose();
    }
  };

  return (
    <div className="modal-background" onClick={handleClickOutside}>
      <div className="modal">
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

