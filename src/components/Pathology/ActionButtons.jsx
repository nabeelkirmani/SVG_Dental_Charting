// src/components/Pathology/ActionButtons.jsx
import { useContext } from "react";
import { SelectionContext } from "../../contexts/SelectionContext";
import "./ActionButtons.scss";

/**
 * ActionButtons component providing action buttons for dental pathology operations
 * Includes Monitor, Treat, and Save buttons with validation
 * @returns {JSX.Element} Action buttons for pathology operations
 */
const ActionButtons = () => {
  const { selectedTooth, selectedPathology, saveToothData } =
    useContext(SelectionContext);

  /**
   * Handles save action with validation for tooth and pathology selection
   */
  const handleSave = () => {
    if (!selectedTooth) {
      alert("Please select a tooth first");
      return;
    }

    if (!selectedPathology) {
      alert("Please select a pathology type.");
      return;
    }

    // If tooth & pathology are selected, call the function that does the POST request
    saveToothData();
    alert(`Data saved for tooth ${selectedTooth}`);
  };

  /**
   * Handles different action button clicks
   * @param {string} action - The action type ('Save', 'Monitor', 'Treat')
   */
  const handleAction = (action) => {
    switch (action) {
      case "Save":
        handleSave();
        break;
      case "Monitor":
        console.log("Monitor action");
        break;
      case "Treat":
        console.log("Treat action");
        break;
      default:
        console.log(`${action} clicked`);
    }
  };

  return (
    <div className="actions">
      <button
        className="button monitor-action"
        onClick={() => handleAction("Monitor")}
      >
        <div>MONITOR</div>
      </button>
      <button
        className="button treat-action"
        onClick={() => handleAction("Treat")}
      >
        <div>TREAT</div>
      </button>
      <button
        className="button save-action"
        onClick={() => handleAction("Save")}
      >
        <div>SAVE</div>
      </button>
    </div>
  );
};

export default ActionButtons;
