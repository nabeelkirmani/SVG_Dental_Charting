// src/components/ToothNumbers/ToothNumbers.jsx
import React, { useContext } from "react";
import "./ToothNumbers.scss";
import { SelectionContext } from "../../contexts/SelectionContext.jsx";

const ToothNumbers = () => {
  const { selectedTooth, handleToothSelect } = useContext(SelectionContext);
  const teethNumbers = Array.from({ length: 32 }, (_, i) => i + 1);

  return (
    <div className="tooth-numbers">
      {teethNumbers.map((number) => (
        <button
          key={number}
          className={`tooth-number-button ${
            selectedTooth === number ? "active" : ""
          }`}
          onClick={() => handleToothSelect(number)}
        >
          {number}
        </button>
      ))}
    </div>
  );
}

export default ToothNumbers;
