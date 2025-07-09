// src/components/Canvas/Canvas.jsx
import "./Canvas.scss";
import React, { useContext } from "react";
import { SelectionContext } from "../../contexts/SelectionContext.jsx";
import { useCanvasImage } from "./hooks/useCanvasImage";
import { useCanvasShapes } from "./hooks/useCanvasShapes";
import { usePathDrawing } from "../../hooks/usePathDrawing.js";
import CanvasView from "./components/CanvasView.jsx";

/**
 * Canvas component for rendering dental charting views.
 * Displays front and top views of a selected tooth with associated images and shapes.
 * Handles drawing interactions based on user input and context state.
 * @returns {JSX.Element} The rendered canvas with tooth views and interactive elements.
 */
const Canvas = () => {
  /**
   * Context values from SelectionContext for managing tooth selection and drawing state.
   * @type {Object}
   * @property {string} selectedTooth - The currently selected tooth identifier.
   * @property {Array} selectedZones - Array of selected zones on the tooth.
   * @property {string} selectedPathology - The currently selected pathology type.
   * @property {Object} pathologyDetails - Details of the selected pathology.
   * @property {Function} updateSVGPath - Function to update the SVG path for drawing.
   * @property {string} activeView - The currently active view (front or top).
   * @property {boolean} isDrawing - Indicates if drawing mode is active.
   * @property {Array} frontViewPoints - Points for drawing on the front view.
   * @property {Function} setFrontViewPoints - Setter for front view points.
   * @property {Array} topViewPoints - Points for drawing on the top view.
   * @property {Function} setTopViewPoints - Setter for top view points.
   * @property {boolean} isFrontPathClosed - Indicates if the front view path is closed.
   * @property {Function} setIsFrontPathClosed - Setter for front path closed state.
   * @property {boolean} isTopPathClosed - Indicates if the top view path is closed.
   * @property {Function} setIsTopPathClosed - Setter for top path closed state.
   */
  const {
    selectedTooth,
    selectedZones,
    selectedPathology,
    pathologyDetails,
    updateSVGPath,
    activeView,
    isDrawing,
    frontViewPoints,
    setFrontViewPoints,
    topViewPoints,
    setTopViewPoints,
    isFrontPathClosed,
    setIsFrontPathClosed,
    isTopPathClosed,
    setIsTopPathClosed,
  } = useContext(SelectionContext);

  /**
   * Custom hook to retrieve images for front and top views based on the selected tooth.
   * @type {Object}
   * @property {string} imageFrontView - URL or path to the front view image of the tooth.
   * @property {string} imageTopView - URL or path to the top view image of the tooth.
   */
  const { imageFrontView, imageTopView } = useCanvasImage(selectedTooth);
  /**
   * Custom hook to generate shapes for front and top views based on tooth selection and pathology.
   * @type {Object}
   * @property {Array} frontShapes - Array of shape data for the front view.
   * @property {Array} topShapes - Array of shape data for the top view.
   */
  const { frontShapes, topShapes } = useCanvasShapes(
    selectedTooth,
    selectedPathology,
    selectedZones,
    pathologyDetails
  );

  /**
   * Custom hook for handling path drawing on the front view.
   * @type {Object}
   * @property {Function} handleDrawing - Function to handle drawing interactions on the front view.
   */
  const frontDrawing = usePathDrawing(
    updateSVGPath,
    "front",
    frontViewPoints,
    setFrontViewPoints,
    isFrontPathClosed,
    setIsFrontPathClosed
  );

  /**
   * Custom hook for handling path drawing on the top view.
   * @type {Object}
   * @property {Function} handleDrawing - Function to handle drawing interactions on the top view.
   */
  const topDrawing = usePathDrawing(
    updateSVGPath,
    "top",
    topViewPoints,
    setTopViewPoints,
    isTopPathClosed,
    setIsTopPathClosed
  );

  return (
    <div className="canvas">
      <div className="teeth">
        <CanvasView
          view="front"
          width={322}
          height={380}
          image={imageFrontView}
          shapes={frontShapes}
          points={frontViewPoints}
          isPathClosed={isFrontPathClosed}
          isDrawing={isDrawing}
          activeView={activeView}
          handleDrawing={(point) =>
            frontDrawing.handleDrawing(point, isDrawing)
          }
        />
        <CanvasView
          view="top"
          width={172}
          height={172}
          image={imageTopView}
          shapes={topShapes}
          points={topViewPoints}
          isPathClosed={isTopPathClosed}
          isDrawing={isDrawing}
          activeView={activeView}
          handleDrawing={(point) => topDrawing.handleDrawing(point, isDrawing)}
        />
      </div>
    </div>
  );
};

export default Canvas;
