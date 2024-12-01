// src/components/Buttons/MainButtons/MainButtons.jsx
import React, { useContext } from "react";
import "./MainButtons.css";
import { SelectionContext } from "../../../contexts/SelectionContext";

const mainButtonLabels = [
  "Decay",
  "Fracture",
  "Tooth Wear",
  "Discoloration",
  "Apical",
  "Development Disorder",
];

function MainButtons() {
  const { activeMainButton, handleMainButtonClick } =
    useContext(SelectionContext);

  return (
    <div className="main-buttons">
      {mainButtonLabels.map((label) => (
        <button
          key={label}
          className={`main-button ${
            activeMainButton === label ? "active" : ""
          }`}
          onClick={() => handleMainButtonClick(label)}
        >
          {label}
        </button>
      ))}
    </div>
  );
}

export default MainButtons;
