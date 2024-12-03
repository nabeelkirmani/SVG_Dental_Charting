// src/components/MainContent/MainContent.jsx
import React from "react";
import Pathology from "../Pathology/Pathology.jsx";
import "./MainContent.scss";

function MainContent() {
  return (
    <div data-view="pathology" className="main-content">
      <Pathology />
    </div>
  );
}

export default MainContent;
