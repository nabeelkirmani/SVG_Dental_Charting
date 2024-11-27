// src/components/Controls/Controls.jsx
import React from "react";
import "./Controls.css";
import MainButtons from "../MainButtons/MainButtons.jsx";
import SecondaryButtons from "../SecondaryButtons/SecondaryButtons.jsx";
import ActionButtons from "../ActionButtons/ActionButtons.jsx";

function Controls() {
  return (
    <div className="controls">
      <MainButtons />
      <SecondaryButtons />
      <ActionButtons />
    </div>
  );
}

export default Controls;
