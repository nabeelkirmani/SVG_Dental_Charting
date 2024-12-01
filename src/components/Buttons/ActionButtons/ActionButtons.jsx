// src/components/ActionButtons/ActionButtons.jsx
import React from "react";
import "./ActionButtons.css";

const actions = [
  { label: "MONITOR", className: "monitor" },
  { label: "TREAT", className: "treat" },
  { label: "SAVE", className: "save" },
];

function ActionButtons() {
  const handleAction = (action) => {
    // Implement action handlers as needed
    console.log(`${action} clicked`);
  };

  return (
    <div className="action-buttons">
      {actions.map((action) => (
        <button
          key={action.label}
          className={`action-button ${action.className}`}
          onClick={() => handleAction(action.label)}
        >
          {action.label}
        </button>
      ))}
    </div>
  );
}

export default ActionButtons;
