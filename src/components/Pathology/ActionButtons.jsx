// src/components/Pathology/ActionButtons.jsx
import React, { useContext } from "react";
import { SelectionContext } from "../../contexts/SelectionContext";
import "./ActionButtons.scss";

const ActionButtons = () => {
  const { selectedTooth, selectedPathology, saveToothData } =
    useContext(SelectionContext);

  const handleSave = () => {
    if (!selectedTooth) {
      alert("Please select a tooth first");
      return;
    }

    if (!selectedPathology) {
      aleert("Please select the type of Pathology.");
      return;
    }

    saveToothData();
    alert(`Data saved for tooth ${selectedTooth}`);
  };

  const handleAction = (action) => {
    switch (action) {
      case "Save":
        handleSave();
        break;
      case "Monitor":
        console.log("Monitor action empty");
        break;
      case "Treat":
        console.log("Treat action empty");
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
