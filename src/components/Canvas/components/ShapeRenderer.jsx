// src/components/Canvas/components/ShapeRenderer.jsx
import { memo } from "react";
import { Path } from "react-konva";

/**
 * ShapeRenderer component for rendering different types of shapes on Konva canvas
 * Currently supports path shapes with stroke and fill properties
 * @param {Object} props - Component props
 * @param {Object} props.shape - Shape object with type, data, and styling properties
 * @returns {JSX.Element|null} Konva Path component or null if unknown shape type
 */
const ShapeRenderer = memo(({ shape }) => {
  console.log("Rendering shape:", shape);

  switch (shape.type.toLowerCase()) {
    case "path":
      // If the shape has only stroke properties (1D line), handle differently
      if (shape.stroke && !shape.fill) {
        return (
          <Path
            data={shape.data}
            stroke={shape.stroke}
            strokeWidth={shape.strokeWidth || 2}
            lineCap="round"
            lineJoin="round"
            fill="transparent"
          />
        );
      }
      // Regular filled path (2D shape)
      return (
        <Path
          data={shape.data}
          fill={shape.fill}
          stroke={shape.stroke || "none"}
          strokeWidth={shape.strokeWidth || 1}
        />
      );
    default:
      console.warn("Unknown shape type:", shape.type);
      return null;
  }
});

ShapeRenderer.displayName = "ShapeRenderer";

export default ShapeRenderer;
