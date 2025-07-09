// src/components/Canvas/components/CanvasPoints.jsx
import { Line, Circle } from "react-konva";

/**
 * CanvasPoints component for rendering drawing points and lines on Konva canvas
 * Displays connected lines between points and individual point markers
 * @param {Object} props - Component props
 * @param {Array} props.points - Array of point objects with x, y coordinates
 * @param {boolean} props.isPathClosed - Whether the path should be closed (filled)
 * @returns {JSX.Element|null} Konva Line and Circle elements or null if no points
 */
const CanvasPoints = ({ points, isPathClosed }) => {
  if (points.length === 0) return null;

  return (
    <>
      <Line
        points={points.flatMap((p) => [p.x, p.y])}
        stroke="red"
        strokeWidth={2}
        closed={isPathClosed}
        fill={isPathClosed ? "rgba(255, 0, 0, 0.2)" : undefined}
      />
      {points.map((point, i) => (
        <Circle key={i} x={point.x} y={point.y} radius={2} fill="blue" />
      ))}
    </>
  );
};

export default CanvasPoints;
