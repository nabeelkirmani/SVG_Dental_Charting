// src/components/Controls/Controls.jsx
import React from "react";
import "./Controls.scss";
import MainButtons from "../Buttons/MainButtons/MainButtons.jsx";
import SecondaryButtons from "../Buttons/SecondaryButtons/SecondaryButtons.jsx";
import ActionButtons from "../Buttons/ActionButtons/ActionButtons.jsx";
import SubButtons from "../Buttons/SubButtons/SubButtons.jsx";

function Controls() {
  return (
    <div className="controls">
      <div className="sub-buttons-column">
        <SubButtons />
      </div>
      <div className="buttons-column">
        <MainButtons />
        <SecondaryButtons />
        <ActionButtons />
      </div>
    </div>
  );
}

export default Controls;
