// src/components/TeethChart/TeethChart.jsx
import React, { useContext } from "react";
import { toothImagesFrontView, toothImagesTopView } from "../../assets/images";
import { SelectionContext } from "../../contexts/SelectionContext";
import "./TeethChart.scss";

const TeethChart = ({ onToothClick }) => {
  const { handleToothSelect } = useContext(SelectionContext);
  const upperTeeth = [
    18, 17, 16, 15, 14, 13, 12, 11, 21, 22, 23, 24, 25, 26, 27, 28,
  ];
  const lowerTeeth = [
    48, 47, 46, 45, 44, 43, 42, 41, 31, 32, 33, 34, 35, 36, 37, 38,
  ];

  const handleClick = (toothNum) => {
    handleToothSelect(toothNum);
    onToothClick();
  };

  const ToothView = ({ toothNum, view, imageSource }) => (
    <div
      key={`${view}-${toothNum}`}
      className="tooth"
      onClick={() => handleClick(toothNum)}
      role="button"
      tabIndex={0}
      onKeyPress={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          handleClick(toothNum);
        }
      }}
    >
      <img src={imageSource[toothNum]} alt={`Tooth ${toothNum}`} />
    </div>
  );

  const ToothNumber = ({ num }) => (
    <div
      className="number"
      onClick={() => handleClick(num)}
      role="button"
      tabIndex={0}
      onKeyPress={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          handleClick(num);
        }
      }}
    >
      {num}
    </div>
  );

  return (
    <div className="teeth-chart">
      {/* Upper Teeth Front View */}
      <div className="teeth-row upper-front">
        {upperTeeth.map((toothNum) => (
          <ToothView
            key={`front-${toothNum}`}
            toothNum={toothNum}
            view="front"
            imageSource={toothImagesFrontView}
          />
        ))}
      </div>

      {/* Upper Teeth Top View */}
      <div className="teeth-row upper-top">
        {upperTeeth.map((toothNum) => (
          <ToothView
            key={`top-${toothNum}`}
            toothNum={toothNum}
            view="top"
            imageSource={toothImagesTopView}
          />
        ))}
      </div>

      {/* Teeth Numbers */}
      <div className="teeth-numbers upper">
        {upperTeeth.map((num) => (
          <ToothNumber key={num} num={num} />
        ))}
      </div>
      <div className="teeth-numbers lower">
        {lowerTeeth.map((num) => (
          <ToothNumber key={num} num={num} />
        ))}
      </div>

      {/* Lower Teeth Top View */}
      <div className="teeth-row lower-top">
        {lowerTeeth.map((toothNum) => (
          <ToothView
            key={`top-${toothNum}`}
            toothNum={toothNum}
            view="top"
            imageSource={toothImagesTopView}
          />
        ))}
      </div>

      {/* Lower Teeth Front View */}
      <div className="teeth-row lower-front">
        {lowerTeeth.map((toothNum) => (
          <ToothView
            key={`front-${toothNum}`}
            toothNum={toothNum}
            view="front"
            imageSource={toothImagesFrontView}
          />
        ))}
      </div>
    </div>
  );
};

export default TeethChart;
