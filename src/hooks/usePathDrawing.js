// src/hooks/usePathDrawing.js
import { useState, useCallback } from "react";

export const usePathDrawing = (updateSVGPath, view) => {
  const [points, setPoints] = useState([]);
  const [isPathClosed, setIsPathClosed] = useState(false);

  const handleDrawing = useCallback(
    (point, isDrawing) => {
      if (!isDrawing) return false;

      const newPoints = [...points, point];

      if (newPoints.length > 2) {
        const firstPoint = newPoints[0];
        const distance = Math.hypot(
          point.x - firstPoint.x,
          point.y - firstPoint.y
        );

        if (distance < 10) {
          setIsPathClosed(true);
          setPoints(newPoints.slice(0, -1));
          updateSVGPath(newPoints.slice(0, -1), true, view);
          return true;
        }
      }

      setPoints(newPoints);
      updateSVGPath(newPoints, false, view);
      return false;
    },
    [points, updateSVGPath, view]
  );

  const resetDrawing = useCallback(() => {
    setPoints([]);
    setIsPathClosed(false);
  }, []);

  return {
    points,
    isPathClosed,
    handleDrawing,
    resetDrawing,
    setPoints,
    setIsPathClosed,
  };
};
