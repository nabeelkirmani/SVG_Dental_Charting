// src/components/Canvas/CanvasComponent/CanvasComponent.jsx
import React, { useContext } from "react";
import { SelectionContext } from "../../../contexts/SelectionContext.jsx";
import { useCanvasImage } from "../hooks/useCanvasImage";
import { useCanvasShapes } from "../hooks/useCanvasShapes";
import { usePathDrawing } from "../../../hooks/usePathDrawing";
import CanvasView from "../components/CanvasView";
import "./CanvasComponent.module.scss";

function CanvasComponent() {
  const {
    selectedTooth,
    selectedZones,
    selectedPathology,
    pathologyDetails,
    updateSVGPath,
    activeView,
    isDrawing,
  } = useContext(SelectionContext);

  const { imageFrontView, imageTopView } = useCanvasImage(selectedTooth);
  const { frontShapes, topShapes } = useCanvasShapes(
    selectedTooth,
    selectedPathology,
    selectedZones,
    pathologyDetails
  );

  const frontDrawing = usePathDrawing(updateSVGPath, "front");
  const topDrawing = usePathDrawing(updateSVGPath, "top");

  return (
    <div className="teeth">
      <CanvasView
        view="front"
        width={322}
        height={380}
        image={imageFrontView}
        shapes={frontShapes}
        points={frontDrawing.points}
        isPathClosed={frontDrawing.isPathClosed}
        isDrawing={isDrawing}
        activeView={activeView}
        handleDrawing={(point) => frontDrawing.handleDrawing(point, isDrawing)}
      />
      <CanvasView
        view="top"
        width={172}
        height={172}
        image={imageTopView}
        shapes={topShapes}
        points={topDrawing.points}
        isPathClosed={topDrawing.isPathClosed}
        isDrawing={isDrawing}
        activeView={activeView}
        handleDrawing={(point) => topDrawing.handleDrawing(point, isDrawing)}
      />
    </div>
  );
}

export default CanvasComponent;
