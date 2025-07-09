// src/components/ToothWheel/ToothWheel.jsx
import { useContext } from "react";
import "./ToothWheel.scss";
import { SelectionContext } from "../../contexts/SelectionContext.jsx";

/** Array of upper teeth numbers in display order */
const upperTeeth = [
  18, 17, 16, 15, 14, 13, 12, 11, 21, 22, 23, 24, 25, 26, 27, 28,
];
/** Array of lower teeth numbers in display order */
const lowerTeeth = [
  38, 37, 36, 35, 34, 33, 32, 31, 41, 42, 43, 44, 45, 46, 47, 48,
];

/**
 * ToothWheel component for displaying and selecting teeth
 * Shows upper and lower teeth in a wheel-like arrangement with selection functionality
 * @returns {JSX.Element} ToothWheel component with clickable tooth buttons
 */
const ToothWheel = () => {
  const { selectedTooth, handleToothSelect } = useContext(SelectionContext);

  return (
    <div className="tooth-wheel">
      <div className="tooth-wheel-navigation">
        <ol className="upper-teeth">
          {upperTeeth.map((number) => (
            <li
              key={number}
              className={selectedTooth === number ? "active" : ""}
            >
              <button onClick={() => handleToothSelect(number)}>
                {number}
              </button>
            </li>
          ))}
        </ol>
        <ol className="lower-teeth">
          {lowerTeeth.map((number) => (
            <li
              key={number}
              className={selectedTooth === number ? "active" : ""}
            >
              <button onClick={() => handleToothSelect(number)}>
                {number}
              </button>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default ToothWheel;
