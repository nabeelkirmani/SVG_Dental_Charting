// src/components/Pathology/Pathology.jsx
import "./Pathology.scss";
import PathologyTypes from "./PathologyTypes.jsx";
import PathologyDetails from "./PathologyDetails.jsx";
import ActionButtons from "./ActionButtons.jsx";
import Zones from "../Zones/Zones.jsx";

function Pathology() {
  return (
    <>
      <Zones />
      <div className="main">
        <h2 className="heading">Pathology</h2>
        <a href="#" className="close">
          &times;
        </a>
        <PathologyTypes />
        <PathologyDetails />
        <ActionButtons />
      </div>
    </>
  );
}

export default Pathology;
