// src/components/MainContent/MainContent.jsx
import React from "react";
import Pathology from "../Pathology/Pathology.jsx";
import "./MainContent.scss";

const MainContent = ({ onClose }) => {
  return (
    <div data-view="pathology" className="main-content">
      <Pathology onClose={onClose} />
    </div>
  );
};

export default MainContent;
