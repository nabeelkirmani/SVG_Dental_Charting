// src/components/TeethChart/TeethChart.jsx
import React from "react";
import { toothImagesFrontView, toothImagesTopView } from "../../assets/images";
import "./TeethChart.scss";

const TeethChart = () => {
  const upperTeeth = [
    18, 17, 16, 15, 14, 13, 12, 11, 21, 22, 23, 24, 25, 26, 27, 28,
  ];
  const lowerTeeth = [
    48, 47, 46, 45, 44, 43, 42, 41, 31, 32, 33, 34, 35, 36, 37, 38,
  ];

  return (
    <div className="teeth-chart">
      {/* Upper Teeth Front View */}
      <div className="teeth-row upper-front">
        {upperTeeth.map((toothNum) => (
          <div key={`front-${toothNum}`} className="tooth">
            <img
              src={toothImagesFrontView[toothNum]}
              alt={`Tooth ${toothNum}`}
            />
          </div>
        ))}
      </div>

      {/* Upper Teeth Top View */}
      <div className="teeth-row upper-top">
        {upperTeeth.map((toothNum) => (
          <div key={`top-${toothNum}`} className="tooth">
            <img src={toothImagesTopView[toothNum]} alt={`Tooth ${toothNum}`} />
          </div>
        ))}
      </div>

      {/* Teeth Numbers */}
      <div className="teeth-numbers upper">
        {upperTeeth.map((num) => (
          <div key={num} className="number">
            {num}
          </div>
        ))}
      </div>
      <div className="teeth-numbers lower">
        {lowerTeeth.map((num) => (
          <div key={num} className="number">
            {num}
          </div>
        ))}
      </div>

      {/* Lower Teeth Top View */}
      <div className="teeth-row lower-top">
        {lowerTeeth.map((toothNum) => (
          <div key={`top-${toothNum}`} className="tooth">
            <img src={toothImagesTopView[toothNum]} alt={`Tooth ${toothNum}`} />
          </div>
        ))}
      </div>

      {/* Lower Teeth Front View */}
      <div className="teeth-row lower-front">
        {lowerTeeth.map((toothNum) => (
          <div key={`front-${toothNum}`} className="tooth">
            <img
              src={toothImagesFrontView[toothNum]}
              alt={`Tooth ${toothNum}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeethChart;
