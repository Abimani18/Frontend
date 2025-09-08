import React from "react";
import "./ConfirmationModal.css";

const ConfirmationModal = ({ message, onCancel, onConfirm }) => {
  return (
    <div className="confirmation-modal-overlay">
      <div className="confirmation-modal">
        <p>{message}</p>
        <div className="confirmation-modal-buttons">
          <button onClick={onCancel}>Cancel</button>
          <button onClick={onConfirm}>Confirm</button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
