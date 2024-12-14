// src/components/Canvas/Canvas.jsx
import "./Canvas.scss";
import React, { useContext } from "react";
import { SelectionContext } from "../../contexts/SelectionContext.jsx";
import { useCanvasImage } from "./hooks/useCanvasImage";
import { useCanvasShapes } from "./hooks/useCanvasShapes";
import { usePathDrawing } from "../../hooks/usePathDrawing.js";
import CanvasView from "./components/CanvasView.jsx";

const Canvas = () => {
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

  const { imageFrontView, imageTopView } = useCanvasImage(selectedTooth);
  const { frontShapes, topShapes } = useCanvasShapes(
    selectedTooth,
    selectedPathology,
    selectedZones,
    pathologyDetails
  );

  const frontDrawing = usePathDrawing(
    updateSVGPath,
    "front",
    frontViewPoints,
    setFrontViewPoints,
    isFrontPathClosed,
    setIsFrontPathClosed
  );

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
