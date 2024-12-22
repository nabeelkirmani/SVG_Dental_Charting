// src/components/Pathology/PathologyDetails.jsx
import React, { useContext } from "react";
import { SelectionContext } from "../../contexts/SelectionContext.jsx";
import "./PathologyDetails.scss";
import pathologyOptions from "./pathologyOptions.js";

const PathologyDetails = () => {
  const { selectedPathology, pathologyDetails, updatePathologyDetail } =
    useContext(SelectionContext);

  if (!selectedPathology) {
    return <p className="details-placeholder">Select a pathology type</p>;
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

    const handleOptionClick = (optionValue) => {
      if (isMultiple) {
        const newValue = selectedValue.includes(optionValue)
          ? selectedValue.filter((v) => v !== optionValue)
          : [...selectedValue, optionValue];
        updatePathologyDetail(levelName, newValue);
      } else {
        const newValue = selectedValue === optionValue ? "" : optionValue;
        updatePathologyDetail(levelName, newValue);
      }
    };

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
                onClick={() => handleOptionClick(option.value)}
              >
                <label>{option.label}</label>
              </span>
            );
          })}
        </span>
      </fieldset>
    );
  };

  const renderHierarchy = (currentLevel) => {
    if (!currentLevel) return null;

    return Object.entries(currentLevel).map(([levelName, levelData]) => (
      <div key={levelName}>
        {renderOptions(levelName, levelData)}
        {pathologyDetails[levelName] &&
          levelData.find?.((opt) => opt.value === pathologyDetails[levelName])
            ?.next &&
          renderHierarchy(
            levelData.find((opt) => opt.value === pathologyDetails[levelName])
              .next
          )}
      </div>
    ));
  };

  return <div className="details">{renderHierarchy(hierarchy)}</div>;
};

export default PathologyDetails;
