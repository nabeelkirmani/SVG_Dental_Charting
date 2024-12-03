// src/components/Pathology/PathologyDetails.jsx
import React, { useContext } from "react";
import { SelectionContext } from "../../contexts/SelectionContext.jsx";

function PathologyDetails() {
  const { pathologyDetails, updatePathologyDetail } =
    useContext(SelectionContext);

  const renderOptions = (name, options) => (
    <fieldset data-name={name} className="detail">
      <span className="options">
        {options.map((option) => (
          <span
            key={option.value}
            className={`option ${
              pathologyDetails[name] === option.value ? "selected" : ""
            }`}
          >
            <input
              type="radio"
              name={name}
              id={`${name}-${option.value}`}
              value={option.value}
              checked={pathologyDetails[name] === option.value}
              onChange={() => updatePathologyDetail(name, option.value)}
            />
            <label htmlFor={`${name}-${option.value}`}>{option.label}</label>
          </span>
        ))}
      </span>
    </fieldset>
  );

  return (
    <div className="details">
      {renderOptions("stage", [
        { value: "dentin", label: "Dentin" },
        { value: "enamel", label: "Enamel" },
      ])}
      {renderOptions("cavitation", [
        { value: "cavitation", label: "Cavitation" },
        { value: "noCavitation", label: "No Cavitations" },
      ])}
      {renderOptions("pulp", [
        { value: "involved", label: "Pulp involved" },
        { value: "notInvolved", label: "Pulp not involved" },
      ])}
      {renderOptions("level", [
        { value: "c1", label: "C1" },
        { value: "c2", label: "C2" },
        { value: "c3", label: "C3" },
        { value: "c4", label: "C4" },
      ])}
    </div>
  );
}

export default PathologyDetails;
