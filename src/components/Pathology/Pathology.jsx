// src/components/Pathology/Pathology.jsx
import React from "react";
import "./Pathology.scss";
import PathologyTypes from "./PathologyTypes.jsx";
import PathologyDetails from "./PathologyDetails.jsx";
import ActionButtons from "./ActionButtons.jsx";
import Zones from "../Zones/Zones.jsx";
import PathDrawer from "../PathDrawer/PathDrawer.jsx";

function Pathology({ onClose }) {
  return (
    <>
      <div className="main">
        <h2 className="heading">Pathology</h2>
        <a
          href="#"
          className="close"
          onClick={(e) => {
            e.preventDefault();
            onClose();
          }}
        >
          &times;
        </a>
        <PathologyTypes />
        <PathologyDetails />
        <ActionButtons />
        <PathDrawer />
      </div>
      <Zones />
    </>
  );
}

export default Pathology;
