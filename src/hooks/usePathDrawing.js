// src/hooks/usePathDrawing.js
import { useState, useCallback, useEffect } from "react";

export const usePathDrawing = (
  updateSVGPath,
  view,
  externalPoints,
  setExternalPoints,
  externalIsPathClosed,
  setExternalIsPathClosed
) => {
  const [points, setPoints] = useState(externalPoints || []);
  const [isPathClosed, setIsPathClosed] = useState(
    externalIsPathClosed || false
  );
  const [drawingMode, setDrawingMode] = useState("normal");

  // Sync with external state
  useEffect(() => {
    setPoints(externalPoints || []);
  }, [externalPoints]);

  useEffect(() => {
    setIsPathClosed(externalIsPathClosed || false);
  }, [externalIsPathClosed]);

  const handleDrawing = useCallback(
    (point, isDrawing) => {
      if (!isDrawing) return false;

      const newPoints = [...points];

      if (drawingMode === "zigzag") {
        if (newPoints.length >= 2) {
          newPoints[1] = point; // Update end point
        } else {
          newPoints.push(point);
        }
      } else {
        // Normal drawing mode
        newPoints.push(point);

        if (newPoints.length > 2 && !isPathClosed) {
          const firstPoint = newPoints[0];
          const distance = Math.hypot(
            point.x - firstPoint.x,
            point.y - firstPoint.y
          );

          if (distance < 1) {
            setIsPathClosed(true);
            setExternalIsPathClosed(true);
            const finalPoints = newPoints.slice(0, -1);
            setPoints(finalPoints);
            setExternalPoints(finalPoints);
            updateSVGPath(finalPoints, true, view);
            return true;
          }
        }
      }

      setPoints(newPoints);
      setExternalPoints(newPoints);
      updateSVGPath(newPoints, false, view, drawingMode);
      return false;
    },
    [
      points,
      isPathClosed,
      drawingMode,
      updateSVGPath,
      view,
      setExternalPoints,
      setExternalIsPathClosed,
    ]
  );

  const setDrawingType = useCallback((mode) => {
    setDrawingMode(mode);
    setPoints([]);
    setIsPathClosed(false);
  }, []);

  return {
    points,
    isPathClosed,
    handleDrawing,
    drawingMode,
    setDrawingType,
    resetDrawing: useCallback(() => {
      setPoints([]);
      setIsPathClosed(false);
      setExternalPoints([]);
      setExternalIsPathClosed(false);
      setDrawingMode("normal");
    }, [setExternalPoints, setExternalIsPathClosed]),
  };
};
