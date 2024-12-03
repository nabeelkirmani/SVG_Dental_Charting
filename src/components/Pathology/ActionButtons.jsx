// src/components/Pathology/ActionButtons.jsx
import React from "react";
import "./ActionButtons.scss";

function ActionButtons() {
  const handleAction = (action) => {
    console.log(`${action} clicked`);
    // Implement the action logic
  };

  return (
    <div className="actions">
      <button
        className="button monitor"
        onClick={() => handleAction("Monitor")}
      >
        <div>MONITOR</div>
      </button>
      <button className="button treat" onClick={() => handleAction("Treat")}>
        <div>TREAT</div>
      </button>
      <button className="button save" onClick={() => handleAction("Save")}>
        <div>SAVE</div>
      </button>
    </div>
  );
}

export default ActionButtons;
