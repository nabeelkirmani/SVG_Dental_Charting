// src/components/ToothImage.jsx
import React from "react";
import "./ToothImage.css";
import surfaceData from "../assets/surface.json";

function ToothImage({
  uploadedImage,
  visibleSurfaces,
  toggleSurface,
  points,
  isPathClosed,
  svgPath,
  handlePathClick,
  handleReset,
  handleCopyAll,
  canvasRef,
  handleCanvasClick,
  textareaRef,
}) {
  return (
    <div className="image-container">
      {uploadedImage ? (
        <div className="image-wrapper">
          <img
            src={uploadedImage}
            alt="Uploaded Tooth"
            className="uploaded-image"
            width="180"
            height="532"
          />
          <canvas
            ref={canvasRef}
            className="overlay-canvas"
            onClick={handleCanvasClick}
            width={180}
            height={532}
          ></canvas>
          <svg
            className="svg-overlay"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 180 532"
            width="180"
            height="532"
          >
            {Object.entries(surfaceData).map(
              ([surface, path]) =>
                visibleSurfaces[surface] && (
                  <path
                    key={surface}
                    d={path}
                    fill="rgba(255, 122, 122, 0.5)"
                    stroke="red"
                    strokeWidth="2"
                    onClick={() => handlePathClick(path)}
                    style={{ cursor: "pointer" }}
                  />
                )
            )}
          </svg>
        </div>
      ) : (
        <div className="placeholder">
          <p>Upload image</p>
        </div>
      )}
      {uploadedImage && (
        <div className="path-data-section">
          <label htmlFor="svgPath">Path:</label>
          <textarea
            id="svgPath"
            ref={textareaRef}
            value={svgPath}
            readOnly
            placeholder=""
          ></textarea>
          <div className="path-data-buttons">
            <button className="copy-button" onClick={handleCopyAll}>
              Copy All
            </button>
            <button className="reset-button" onClick={handleReset}>
              Reset Path
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ToothImage;
