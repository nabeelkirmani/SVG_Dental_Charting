// src/components/Pathology/Pathology.jsx
import React, { useContext } from "react";
import "./Pathology.scss";
import { SelectionContext } from "../../contexts/SelectionContext.jsx";
import PathologyTypes from "./PathologyTypes.jsx";
import PathologyDetails from "./PathologyDetails.jsx";
import ActionButtons from "./ActionButtons.jsx";
import Zones from "../Zones/Zones.jsx";

function Pathology() {
  const { selectedTooth, handleToothSelect } = useContext(SelectionContext);

  return (
    <>
      <div className="main">
        <h2 className="heading">Pathology</h2>
        <a href="#" className="close">
          &times;
        </a>
        <PathologyTypes />
        <PathologyDetails />
        <ActionButtons />
      </div>
      <Zones />
    </>
  );
}

export default Pathology;
