// src/components/ToothView/ToothView.jsx
import React, { useContext, useEffect, useState } from "react";
import "./ToothView.css";
import { SelectionContext } from "../../contexts/SelectionContext.jsx";
import surfaceData from "../../assets/surface.json";
import toothImages from "../../assets/images";

function ToothView() {
  const { selectedTooth, activeMainButton } = useContext(SelectionContext);
  const [imageSrc, setImageSrc] = useState("");

  useEffect(() => {
    try {
      const img = toothImages[`tooth${selectedTooth}.png`];
      setImageSrc(img.default);
    } catch (error) {
      console.error("Image not found:", error);
      setImageSrc("");
    }
  }, [selectedTooth]);

  const handlePathClick = (path) => {
    // Future implementation for handling path clicks
    console.log("Path clicked:", path);
  };

  return (
    <div className="tooth-view">
      <div className="tooth-image">
        {imageSrc ? (
          <img
            src={imageSrc}
            alt={`Tooth ${selectedTooth}`}
            className="uploaded-image"
          />
        ) : (
          <div className="no-image">Image not available</div>
        )}
        {activeMainButton && (
          <svg
            className="svg-overlay"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 180 532"
            width="180"
            height="532"
          >
            {Object.entries(surfaceData).map(([surface, path]) => (
              <path
                key={surface}
                d={path}
                fill="rgba(255, 122, 122, 0.5)"
                stroke="red"
                strokeWidth="2"
                onClick={() => handlePathClick(path)}
                style={{ cursor: "pointer" }}
              />
            ))}
          </svg>
        )}
      </div>
    </div>
  );
}

export default ToothView;
