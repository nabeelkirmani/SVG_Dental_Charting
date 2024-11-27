// src/components/ToothNumbers/ToothNumbers.jsx
import React, { useContext } from "react";
import "./ToothNumbers.css";
import { SelectionContext } from "../../contexts/SelectionContext.jsx";

function ToothNumbers() {
  const { selectedTooth, handleToothSelect } = useContext(SelectionContext);
  const teeth = Array.from({ length: 32 }, (_, i) => i + 1);

  return (
    <div className="tooth-numbers">
      {teeth.map((tooth) => (
        <button
          key={tooth}
          className={selectedTooth === tooth ? "active" : ""}
          onClick={() => handleToothSelect(tooth)}
        >
          {tooth}
        </button>
      ))}
    </div>
  );
}

export default ToothNumbers;
