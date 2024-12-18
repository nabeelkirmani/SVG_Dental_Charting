// src/components/Welcome/Welcome.jsx
import React from "react";
import "./Welcome.scss";
import TeethChart from "../TeethChart/TeethChart";

const Welcome = ({ onPathologyClick }) => {
  return (
    <div className="welcome">
      <div className="welcome-nav">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            onPathologyClick();
          }}
        >
          Pathology
        </a>
      </div>
      <div className="welcome-content">
        <TeethChart onToothClick={onPathologyClick} />
      </div>
    </div>
  );
};

export default Welcome;
