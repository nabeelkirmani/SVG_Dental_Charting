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
  const { selectedPathology, handlePathologySelect } =
    useContext(SelectionContext);

  return (
    <div className="pathology-types">
      {pathologyTypes.map((type) => (
        <button
          key={type}
          className={selectedPathology === type.toLowerCase() ? "active" : ""}
          onClick={() => handlePathologySelect(type.toLowerCase())}
        >
          {type}
        </button>
      ))}
    </div>
  );
}

export default PathologyTypes;
