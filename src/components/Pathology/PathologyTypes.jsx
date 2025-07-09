// src/components/Pathology/PathologyTypes.jsx
import { useContext } from "react";
import { SelectionContext } from "../../contexts/SelectionContext.jsx";

const pathologyTypes = [
  { label: "Decay", value: "decay" },
  { label: "Fracture", value: "fracture" },
  { label: "Tooth Wear", value: "toothWear" },
  { label: "Discoloration", value: "discoloration" },
  { label: "Apical", value: "apical" },
  { label: "Development Disorder", value: "developmentDisorder" },
];

const PathologyTypes = () => {
  const { selectedPathology, handlePathologyToggle } =
    useContext(SelectionContext);

  return (
    <div className="pathology-types">
      {pathologyTypes.map(({ label, value }) => {
        const isActive = selectedPathology === value;

        return (
          <button
            key={value}
            className={isActive ? "active" : ""}
            onClick={() => handlePathologyToggle(value)}
          >
            <label htmlFor={`pad-${value}`}>{label}</label>
          </button>
        );
      })}
    </div>
  );
};

export default PathologyTypes;
