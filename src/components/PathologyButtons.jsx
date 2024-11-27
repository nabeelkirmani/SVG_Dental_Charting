// src/components/PathologyButtons.jsx
import React from "react";
import "./PathologyButtons.css";

function PathologyButtons({
  selectedPathology,
  onPathologySelect,
  subButtons,
}) {
  const pathologyTypes = [
    ["Decay", "Discoloration"],
    ["Fracture", "Apical"],
    ["Tooth Wear", "Development Disorder"],
    ["Dentin", "Enamel"],
    ["Cavitation", "No Cavitations"],
    ["Pulp Involved", "Pulp not Involved"],
    ["C1", "C2"],
    ["C3", "C4"],
  ];

  return (
    <div className="pathology-section">
      <div className="pathology-buttons">
        {pathologyTypes.map((row) =>
          row.map((pathology) => (
            <button
              key={pathology}
              className={`pathology-button ${
                selectedPathology === pathology ? "active" : ""
              }`}
              onClick={() => onPathologySelect(pathology)}
            >
              {pathology}
            </button>
          ))
        )}
      </div>
      {subButtons.length > 0 && (
        <div className="sub-buttons">
          {subButtons.map((sub) => (
            <button key={sub} className="sub-button">
              {sub}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default PathologyButtons;
