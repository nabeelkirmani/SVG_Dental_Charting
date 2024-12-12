// src/components/Canvas/components/ShapeRenderer.jsx
import React, { memo } from 'react';
import { Rect, Circle, Line, Path } from 'react-konva';

const ShapeRenderer = memo(({ shape }) => {
  switch (shape.type.toLowerCase()) {
    case "rect":
      return (
        <Rect
          x={shape.x}
          y={shape.y}
          width={shape.width}
          height={shape.height}
          fill={shape.fill}
          stroke={shape.stroke}
          strokeWidth={shape.strokeWidth}
        />
      );
    case "circle":
      return (
        <Circle
          x={shape.x}
          y={shape.y}
          radius={shape.radius}
          fill={shape.fill}
          stroke={shape.stroke}
          strokeWidth={shape.strokeWidth}
        />
      );
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
          stroke={shape.stroke}
          strokeWidth={shape.strokeWidth}
        />
      );
    default:
      return null;
  }
});

export default ShapeRenderer;