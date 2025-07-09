// src/components/Welcome/Welcome.jsx

// TODO: Uncomment when savedTeethEntries is implemented
// import { useContext } from "react";
import "./Welcome.scss";
import TeethChart from "../TeethChart/TeethChart";
// TODO: Uncomment when savedTeethEntries is implemented
// import { SelectionContext } from "../../contexts/SelectionContext";

const Welcome = ({ onPathologyClick }) => {
  // TODO: Uncomment when savedTeethEntries is implemented
  // const { savedTeethData } = useContext(SelectionContext);
  // const savedTeethEntries = Object.values(savedTeethData) || [];

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
        <div className="patient-history">
          <h2>Patient History</h2>
          <h3>Name:</h3>
          <p>Test Patient</p>
          <h3>Gender:</h3>
          <p>Male</p>
          <h3>Date of Birth</h3>
          <p>01-01-1990</p>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
