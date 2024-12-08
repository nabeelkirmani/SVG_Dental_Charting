// src/components/Pathology/PathologyDetails.jsx
import React, { useContext } from "react";
import { SelectionContext } from "../../contexts/SelectionContext.jsx";
import "./PathologyDetails.scss";
import pathologyOptions from "./pathologyOptions.js";

const PathologyDetails = () => {
  const { selectedPathology, pathologyDetails, updatePathologyDetail } =
    useContext(SelectionContext);

  if (!selectedPathology) {
    return <p className="details-placeholder">Pathology Detail Placeholder</p>;
  }

  const hierarchy = pathologyOptions[selectedPathology];
  if (!hierarchy) {
    return null;
  }

  const renderOptions = (levelName, levelData) => {
    let options = [];
    let isMultiple = false;
    if (Array.isArray(levelData)) {
      options = levelData;
    } else if (levelData.options) {
      options = levelData.options;
      isMultiple = levelData.multiple || false;
    }

    const selectedValue = pathologyDetails[levelName] || (isMultiple ? [] : "");

    return (
      <fieldset key={levelName} data-name={levelName} className="detail">
        <legend>{levelName}</legend>
        <span className="options">
          {options.map((option) => {
            const isSelected = isMultiple
              ? selectedValue.includes(option.value)
              : selectedValue === option.value;

            return (
              <span
                key={option.value}
                className={`option ${isSelected ? "selected" : ""}`}
              >
                <input
                  type={isMultiple ? "checkbox" : "radio"}
                  name={levelName}
                  id={`${levelName}-${option.value}`}
                  value={option.value}
                  checked={isSelected}
                  onChange={() => {
                    let newValue;
                    if (isMultiple) {
                      if (isSelected) {
                        newValue = selectedValue.filter(
                          (v) => v !== option.value
                        );
                      } else {
                        newValue = [...selectedValue, option.value];
                      }
                    } else {
                      newValue = option.value;
                    }
                    updatePathologyDetail(levelName, newValue);
                  }}
                />
                <label htmlFor={`${levelName}-${option.value}`}>
                  {option.label}
                </label>
              </span>
            );
          })}
        </span>
      </fieldset>
    );
  };

  const renderHierarchy = (currentLevel, depth = 0) => {
    if (!currentLevel) {
      return null;
    }

    const levelName = Object.keys(currentLevel)[0];
    const levelData = currentLevel[levelName];

    const renderedOptions = renderOptions(levelName, levelData);

    const selectedValue = pathologyDetails[levelName];

    let nextLevel = null;

    if (selectedValue) {
      if (Array.isArray(levelData)) {
        const selectedOption = levelData.find(
          (option) => option.value === selectedValue
        );
        if (selectedOption && selectedOption.next) {
          nextLevel = selectedOption.next;
        }
      } else if (levelData.options && levelData.multiple) {
      }
    }

    return (
      <div key={depth}>
        {renderedOptions}
        {nextLevel && renderHierarchy(nextLevel, depth + 1)}
      </div>
    );
  };

  return <div className="details">{renderHierarchy(hierarchy)}</div>;
};

export default PathologyDetails;
