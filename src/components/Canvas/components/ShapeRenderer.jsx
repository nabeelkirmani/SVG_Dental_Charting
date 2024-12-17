// src/components/Canvas/components/ShapeRenderer.jsx
import React, { memo } from "react";
import { Line, Path } from "react-konva";

const ShapeRenderer = memo(({ shape }) => {
  switch (shape.type.toLowerCase()) {
    case "line":
      return (
        <Line
          points={shape.points}
          stroke={shape.stroke}
          strokeWidth={shape.strokeWidth}
          lineCap="round"
          lineJoin="round"
        />
      );
    case "path":
      return (
        <Path
          data={shape.data}
          fill={shape.fill}
          stroke={shape.stroke || "none"}
          strokeWidth={shape.strokeWidth || 1}
        />
      );
    default:
      return null;
  }
});

export default ShapeRenderer;
