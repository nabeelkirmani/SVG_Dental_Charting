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

  // Sync with external state
  useEffect(() => {
    setPoints(externalPoints || []);
  }, [externalPoints]);

  useEffect(() => {
    setIsPathClosed(externalIsPathClosed || false);
  }, [externalIsPathClosed]);

  const handleDrawing = useCallback(
    (point, isDrawing) => {
      if (!isDrawing || isPathClosed) return false;

      const newPoints = [...points, point];

      if (newPoints.length > 2) {
        const firstPoint = newPoints[0];
        const distance = Math.hypot(
          point.x - firstPoint.x,
          point.y - firstPoint.y
        );

        if (distance < 10) {
          setIsPathClosed(true);
          setExternalIsPathClosed(true);
          const finalPoints = newPoints.slice(0, -1);
          setPoints(finalPoints);
          setExternalPoints(finalPoints);
          updateSVGPath(finalPoints, true, view);
          return true;
        }
      }

      setPoints(newPoints);
      setExternalPoints(newPoints);
      updateSVGPath(newPoints, false, view);
      return false;
    },
    [
      points,
      isPathClosed,
      updateSVGPath,
      view,
      setExternalPoints,
      setExternalIsPathClosed,
    ]
  );

  const resetDrawing = useCallback(() => {
    setPoints([]);
    setIsPathClosed(false);
    setExternalPoints([]);
    setExternalIsPathClosed(false);
  }, [setExternalPoints, setExternalIsPathClosed]);

  return {
    points,
    isPathClosed,
    handleDrawing,
    resetDrawing,
    setPoints,
    setIsPathClosed,
  };
};
