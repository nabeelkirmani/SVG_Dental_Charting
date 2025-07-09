// src/components/Pathology/Pathology.jsx
import "./Pathology.scss";
import PathologyTypes from "./PathologyTypes.jsx";
import PathologyDetails from "./PathologyDetails.jsx";
import ActionButtons from "./ActionButtons.jsx";
import Zones from "../Zones/Zones.jsx";
import PathDrawer from "../PathDrawer/PathDrawer.jsx";

/**
 * Pathology component for managing pathology-related content.
 * Renders various sub-components for pathology types, details, actions, and drawing.
 * @param {Object} props - The props for the Pathology component.
 * @param {Function} props.onClose - Callback function triggered to close the pathology view.
 * @returns {JSX.Element} The rendered pathology content with interactive elements.
 */
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
