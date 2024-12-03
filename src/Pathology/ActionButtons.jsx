// src/components/Pathology/ActionButtons.jsx
import React from 'react';
import './ActionButtons.scss';

function ActionButtons() {
  const handleAction = (action) => {
    console.log(`${action} clicked`);
    // Implement the action logic
  };

  return (
    <div className="action-buttons">
      <button className="monitor" onClick={() => handleAction('Monitor')}>
        MONITOR
      </button>
      <button className="treat" onClick={() => handleAction('Treat')}>
        TREAT
      </button>
      <button className="save" onClick={() => handleAction('Save')}>
        SAVE
      </button>
    </div>
  );
}

export default ActionButtons;