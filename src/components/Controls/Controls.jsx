// src/components/Controls/Controls.jsx
import React from "react";
import "./Controls.css";
import MainButtons from "../Buttons/MainButtons/MainButtons"
import SecondaryButtons from "../Buttons/SecondaryButtons/SecondaryButtons";
import ActionButtons from "../Buttons/ActionButtons/ActionButtons";
import SubButtons from "../Buttons/SubButtons/SubButtons";

function Controls() {
  return (
    <div className="controls">
      <div className="secondary-controls">
        <SubButtons />
      </div>
      <div className="primary-controls">
        <MainButtons />
        <SecondaryButtons />
      </div>
      <div className="action-controls">
        <ActionButtons />
      </div>
    </div>
  );
}

export default Controls;
