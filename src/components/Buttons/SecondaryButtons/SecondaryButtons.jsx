// src/components/Buttons/SecondaryButtons/SecondaryButtons.jsx
import React, { useContext } from "react";
import "./SecondaryButtons.scss";
import { SelectionContext } from "../../../contexts/SelectionContext";

const secondaryLabels = ["Dentin", "Enamel"];
const cavitationLabels = ["Cavitation", "No Cavitation"];
const pulpLabels = ["Pulp Involved", "Pulp Not Involved"];
const classLabels = ["C1", "C2", "C3", "C4"];

function SecondaryButtons() {
  const {
    activeSecondary,
    handleSecondaryClick,
    activeCavitation,
    handleCavitationClick,
    activePulp,
    handlePulpClick,
    activeClass,
    handleClassClick,
  } = useContext(SelectionContext);

  return (
    <div className="secondary-buttons">
      {secondaryLabels.map((label) => (
        <div key={label} className="secondary-group">
          <button
            className={`secondary-button ${
              activeSecondary === label ? "active" : ""
            }`}
            onClick={() => handleSecondaryClick(label)}
          >
            {label}
          </button>
          {activeSecondary === label && (
            <div className="sub-menu">
              {cavitationLabels.map((cav) => (
                <button
                  key={cav}
                  className={`main-button ${
                    activeCavitation === cav ? "active" : ""
                  }`}
                  onClick={() => handleCavitationClick(cav)}
                >
                  {cav}
                </button>
              ))}
              {activeCavitation === "Cavitation" && (
                <div className="sub-menu">
                  {pulpLabels.map((pulp) => (
                    <button
                      key={pulp}
                      className={`main-button ${
                        activePulp === pulp ? "active" : ""
                      }`}
                      onClick={() => handlePulpClick(pulp)}
                    >
                      {pulp}
                    </button>
                  ))}
                  {activePulp && (
                    <div className="sub-menu">
                      {classLabels.map((cls) => (
                        <button
                          key={cls}
                          className={`main-button ${
                            activeClass === cls ? "active" : ""
                          }`}
                          onClick={() => handleClassClick(cls)}
                        >
                          {cls}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default SecondaryButtons;
