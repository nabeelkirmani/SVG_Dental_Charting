// src/components/Welcome/Welcome.jsx
import React from "react";
import "./Welcome.scss";

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
        <h1>Welcome to Dental Charting</h1>
        <p>This is the Welcome Page.</p>
      </div>
    </div>
  );
};

export default Welcome;
