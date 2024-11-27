// src/components/TeethMenu.jsx
import React from "react";
import "./TeethMenu.css";

function TeethMenu({ setSelectedTooth }) {
  const teethNumbers = Array.from({ length: 32 }, (_, i) => i + 1);

  return (
    <div className="teeth-menu">
      {teethNumbers.map((number) => (
        <button
          key={number}
          onClick={() => setSelectedTooth(number)}
          className="teeth-button"
        >
          {number}
        </button>
      ))}
    </div>
  );
}

export default TeethMenu;
