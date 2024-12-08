// src/components/Pathology/PathologyTypes.jsx
import React, { useContext } from "react";
import { SelectionContext } from "../../contexts/SelectionContext.jsx";

const pathologyTypes = [
  "Decay",
  "Fracture",
  "Tooth Wear",
  "Discoloration",
  "Apical",
  "Development Disorder",
];

const PathologyTypes = () => {
  const { selectedPathology, handlePathologyToggle } =
    useContext(SelectionContext);

  return (
    <div className="pathology-types">
      {pathologyTypes.map((type) => {
        const isActive = selectedPathology.includes(type.toLowerCase());

        return (
          <button
            key={type}
            className={isActive ? "active" : ""}
            onClick={() => handlePathologyToggle(type.toLowerCase())}
          >
            <label htmlFor={`pad-${pathologyTypes}`}>{type}</label>
          </button>
        );
      })}
    </div>
  );
};

export default PathologyTypes;
