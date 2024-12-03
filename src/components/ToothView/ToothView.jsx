// src/components/ToothView/ToothView.jsx
import React, { useContext, useEffect, useState } from "react";
import "./ToothView.scss";
import { SelectionContext } from "../../contexts/SelectionContext.jsx";
import surfaceData from "../../assets/surface.json";
import toothImages from "../../assets/images";

const ToothView = () => {
  const { selectedTooth, activeMainButton } = useContext(SelectionContext);
  const [imageSrc, setImageSrc] = useState("");

  useEffect(() => {
    try {
      const img = toothImages[`tooth${selectedTooth}`];
      if (img) {
        setImageSrc(img);
      } else {
        throw new Error("Image not found");
      }
    } catch (error) {
      console.error("Image not found", error);
      setImageSrc("");
    }
  }, [selectedTooth]);

  const handlePathClick = (path) => {
    // TODO: Future implementation for handling path clicks
    console.log("Path clicked:", path);
  };

  return (
    <div className="tooth-view">
      <div className="tooth-image">
        {imageSrc ? (
          <>
            <img
              src={imageSrc}
              alt={`Tooth ${selectedTooth}`}
              className="uploaded-image-front-view"
            />
            <img
              src={imageSrc}
              alt={`Tooth ${selectedTooth}`}
              className="uploaded-image-top-view"
            />
          </>
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
