// src/components/Buttons/SubButtons/SubButtons.jsx
import React, { useContext } from "react";
import "./SubButtons.scss";
import { SelectionContext } from "../../../contexts/SelectionContext";

const subButtonLabels = [
  "Cervical Buccal",
  "Buccal",
  "Mesial",
  "Incisal",
  "Distal",
  "Palatal",
  "Cervical Palatal",
  "Class 4 Mesial",
  "Class 4 Distal",
  "Buccal Surface",
  "Palatal Surface",
];

const SubButtons = () => {
  const { activeSubButton, handleSubButtonClick } =
    useContext(SelectionContext);

  return (
    <div className="sub-buttons">
      {subButtonLabels.map((label) => (
        <button
          key={label}
          className={`sub-button ${activeSubButton === label ? "active" : ""}`}
          onClick={() => handleSubButtonClick(label)}
        >
          {label}
        </button>
      ))}
    </div>
  );
};

export default SubButtons;
