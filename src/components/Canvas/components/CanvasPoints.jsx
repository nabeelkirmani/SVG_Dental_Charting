// src/components/Canvas/components/CanvasPoints.jsx
import { Line, Circle } from "react-konva";

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
