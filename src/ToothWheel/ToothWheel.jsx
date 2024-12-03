// src/components/ToothWheel/ToothWheel.jsx
import React, { useContext } from "react";
import "./ToothWheel.scss";
import { SelectionContext } from "../contexts/SelectionContext";
import CanvasComponent from "../Canvas/Canvas";

const teethNumbers = [
  // Upper teeth numbers
  18, 17, 16, 15, 14, 13, 12, 11, 21, 22, 23, 24, 25, 26, 27, 28,
  // Lower teeth numbers
  38, 37, 36, 35, 34, 33, 32, 31, 41, 42, 43, 44, 45, 46, 47, 48,
];

function ToothWheel() {
  const { selectedTooth, handleToothSelect } = useContext(SelectionContext);

  return (
    <div className="tooth-wheel">
      <ul className="navigation">
        {teethNumbers.map((number) => (
          <li key={number} className={selectedTooth === number ? "active" : ""}>
            <button onClick={() => handleToothSelect(number)}>{number}</button>
          </li>
        ))}
      </ul>
      <div className="viewport">
        <CanvasComponent />
      </div>
    </div>
  );
}

export default ToothWheel;
