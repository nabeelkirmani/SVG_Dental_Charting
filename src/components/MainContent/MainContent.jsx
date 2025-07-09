// src/components/MainContent/MainContent.jsx
import Pathology from "../Pathology/Pathology.jsx";
import "./MainContent.scss";

/**
 * MainContent component serving as a container for the Pathology view.
 * Provides a structural layout for pathology-related content in the application.
 * @param {Object} props - The props for the MainContent component.
 * @param {Function} props.onClose - Callback function triggered to close the current view.
 * @returns {JSX.Element} The rendered main content area with Pathology component.
 */
const MainContent = ({ onClose }) => {
  return (
    <div data-view="pathology" className="main-content">
      <Pathology onClose={onClose} />
    </div>
  );
};

export default MainContent;
