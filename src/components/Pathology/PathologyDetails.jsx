// src/components/Pathology/PathologyDetails.jsx
import { useContext } from "react";
import { SelectionContext } from "../../contexts/SelectionContext.jsx";
import "./PathologyDetails.scss";
import pathologyOptions from "./pathologyOptions.js";

/**
 * The `PathologyDetails` component is responsible for rendering the details of a selected pathology. It uses the `SelectionContext` to access the selected pathology, pathology details, and a function to update the pathology details.
 *
 * If no pathology is selected, it renders a placeholder. Otherwise, it renders the hierarchy of options for the selected pathology, allowing the user to interact with and update the pathology details.
 *
 * The component uses the `renderOptions` function to render the options for a given level in the pathology hierarchy, and the `renderHierarchy` function to recursively render the hierarchy of options.
 */
const PathologyDetails = () => {
  const { selectedPathology, pathologyDetails, updatePathologyDetail } =
    useContext(SelectionContext);

  // Return a placeholder if no pathology is selected
  if (!selectedPathology) {
    return <p className="details-placeholder">Pathology Detail Placeholder</p>;
  }

  // Get the hierarchy for the selected pathology
  const hierarchy = pathologyOptions[selectedPathology];
  if (!hierarchy) {
    return null;
  }

  // Function to render options for a given level
  const renderOptions = (levelName, levelData) => {
    let options = [];
    let isMultiple = false;

    // Check if levelData is an array or has options
    if (Array.isArray(levelData)) {
      options = levelData;
    } else if (levelData.options) {
      // if levelData has options property
      options = levelData.options;
      isMultiple = levelData.multiple || false;
      // Check if multiple selection is allowed
    }

    // Get the selected value for the current level
    const selectedValue = pathologyDetails[levelName] || (isMultiple ? [] : "");

    // Handle option click event
    const handleOptionClick = (optionValue) => {
      if (isMultiple) {
        // Update the selected value for multiple selection
        const newValue = selectedValue.includes(optionValue)
          ? selectedValue.filter((v) => v !== optionValue)
          : [...selectedValue, optionValue];
        updatePathologyDetail(levelName, newValue);
      } else {
        // Update the selected value for single selection
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
        // If levelData is an array, it finds the selected option and sets nextLevel to the next property of the selected option.
      } else if (levelData.options && levelData.multiple) {
        // Handle multiple selection case if needed
      }
    }

    return (
      <div key={depth}>
        {renderedOptions}
        {nextLevel && renderHierarchy(nextLevel, depth + 1)}
        {/* If nextLevel is defined, it recursively calls renderHierarchy to render the next level, increasing the depth by 1. */}
      </div>
    );
  };

  return (
    <div className="details">
      {renderHierarchy(hierarchy)}
      {/* renderHierarchy will recursively render the hierarchy of options, starting from the top level and going down to the deepest level. */}
    </div>
  );
};

export default PathologyDetails;
