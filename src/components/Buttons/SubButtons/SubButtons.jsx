// src/components/Buttons/SubButtons/SubButtons.jsx
import React, { useContext } from "react";
import "./SubButtons.css";
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
  "Class 4 DIstal",
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
          onClick={() => handleSubButtonClick}
        >
          {label}
        </button>
      ))}
      {/* <div className="subButtons">
        <button className="sub-button">Cervical Buccal</button>
        <button className="sub-button">Buccal</button>
        <button className="sub-button">Mesial</button>
        <button className="sub-button active">Incisal</button>
        <button className="sub-button">Distal</button>
        <button className="sub-button">Palatal</button>
        <button className="sub-button">Cervical Palatal</button>
        <button className="sub-button">Class 4 Mesial</button>
        <button className="sub-button">Class 4 Distal</button>
        <button className="sub-button">Buccal Surface</button>
        <button className="sub-button">Palatal Surface</button>
      </div> */}
    </div>
  );
};

export default SubButtons;
