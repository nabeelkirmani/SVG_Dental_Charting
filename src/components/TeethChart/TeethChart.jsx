// src/components/TeethChart/TeethChart.jsx
import { useContext } from "react";
import { toothImagesFrontView, toothImagesTopView } from "../../assets/images";
import { SelectionContext } from "../../contexts/SelectionContext";
import "./TeethChart.scss";

const TeethChart = ({ onToothClick }) => {
  const { handleToothSelect, savedTeethData } = useContext(SelectionContext);

  const upperTeeth = [
    18, 17, 16, 15, 14, 13, 12, 11, 21, 22, 23, 24, 25, 26, 27, 28,
  ];
  const lowerTeeth = [
    48, 47, 46, 45, 44, 43, 42, 41, 31, 32, 33, 34, 35, 36, 37, 38,
  ];

  const handleClick = (toothNum) => {
    handleToothSelect(toothNum);
    onToothClick?.(); // optional
  };

  // Helper for rendering a single tooth + optional overlay
  const ToothView = ({ toothNum, view, imageSource }) => {
    // Pre-calc the canvas dimensions used in <CanvasView>
    const isFront = view === "front";
    const svgWidth = isFront ? 122 : 121;
    const svgHeight = isFront ? 380 : 172;

    // Check if we have saved shapes for this tooth
    const savedInfo = savedTeethData[toothNum];
    const toothShapes = savedInfo?.shapes;
    const pathData = isFront ? toothShapes?.front : toothShapes?.top;

    return (
      <div
        className="tooth"
        style={{ position: "relative" }}
        onClick={() => handleClick(toothNum)}
      >
        <img
          src={imageSource[toothNum]}
          alt={`Tooth ${toothNum}`}
          width={svgWidth}
          height={svgHeight}
          style={{ display: "block" }}
        />
        {/* If there’s an SVG path saved, overlay it */}
        {pathData && (
          <svg
            width={svgWidth}
            height={svgHeight}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              pointerEvents: "none", // so clicks go “through” to the underlying <div>
            }}
          >
            <path
              d={pathData}
              fill="rgba(255, 0, 0, 0.3)"
              stroke="red"
              strokeWidth={2}
            />
          </svg>
        )}
      </div>
    );
  };

  return (
    <div className="teeth-chart">
      {/* UPPER TEETH - FRONT */}
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

      {/* UPPER TEETH - TOP */}
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

      {/* [ … tooth numbering, lower teeth rows, etc. … ] */}
      {/* LOWER TEETH - TOP */}
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

      {/* LOWER TEETH - FRONT */}
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
