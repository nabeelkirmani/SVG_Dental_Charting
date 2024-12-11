// src/components/Canvas/CanvasComponent/CanvasComponent.jsx

import React, { useContext, useEffect, useState, memo } from "react";
import {
  Stage,
  Layer,
  Image as KonvaImage,
  Group,
  Rect,
  Circle,
  Line,
  Path,
} from "react-konva";
import useImage from "use-image";
import { SelectionContext } from "../../../contexts/SelectionContext.jsx";
import {
  toothImagesFrontView,
  toothImagesTopView,
} from "../../../assets/images/index.js";
import zoneShapes from "../../../data/zoneShapes.json"; // Ensure you have this JSON file
import "./CanvasComponent.scss";

/**
 * Memoized ShapeRenderer component to prevent unnecessary re-renders.
 */
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
    // Add more shape types as needed
    default:
      return null;
  }
});

/**
 * CanvasComponent renders the Front and Top views of the selected tooth,
 * applying respective SVG shapes based on selected zones and pathology.
 */
function CanvasComponent() {
  const { selectedTooth, selectedZones, selectedPathology, pathologyDetails } =
    useContext(SelectionContext);

  const [imageFrontView] = useImage(
    selectedTooth ? toothImagesFrontView[selectedTooth] : null
  );
  const [imageTopView] = useImage(
    selectedTooth ? toothImagesTopView[selectedTooth] : null
  );

  // States to hold shapes for Front and Top views
  const [frontShapes, setFrontShapes] = useState([]);
  const [topShapes, setTopShapes] = useState([]);

  /**
   * Effect hook that updates frontShapes and topShapes
   * whenever selectedTooth, selectedZones, selectedPathology, or pathologyDetails change.
   */
  useEffect(() => {
    if (
      selectedTooth &&
      selectedPathology &&
      zoneShapes.teeth[selectedTooth] &&
      zoneShapes.teeth[selectedTooth].pathologies[selectedPathology]
    ) {
      const pathologyData =
        zoneShapes.teeth[selectedTooth].pathologies[selectedPathology];

      let fronts = [];
      let tops = [];

      if (selectedPathology === "decay" || selectedPathology === "tooth wear") {
        selectedZones.forEach((zoneId) => {
          const zone = pathologyData.zones[zoneId];
          if (zone) {
            if (zone.Front) fronts.push(zone.Front);
            if (zone.Top) tops.push(zone.Top);
          }
        });
      } else {
        // Handle other pathologies based on submenu selections
        if (Object.keys(pathologyDetails).length > 0) {
          const detailKey = Object.keys(pathologyDetails)[0]; // e.g., 'color'
          const detailValue = pathologyDetails[detailKey]; // e.g., 'gray'
          const shapeData = pathologyData[detailValue];
          if (shapeData) {
            if (shapeData.Front) fronts.push(shapeData.Front);
            if (shapeData.Top) tops.push(shapeData.Top);
          }
        }
      }

      setFrontShapes(fronts);
      setTopShapes(tops);
    } else {
      setFrontShapes([]);
      setTopShapes([]);
    }
  }, [selectedTooth, selectedPathology, selectedZones, pathologyDetails]);

  return (
    <div className="teeth">
      <div className="tooth">
        {/* Front View Section */}
        <h3>Front View</h3>
        <Stage width={322} height={380}>
          <Layer>
            {selectedTooth && imageFrontView && (
              <KonvaImage
                image={imageFrontView}
                width={122}
                height={380}
                x={0}
                y={0}
              />
            )}
            <Group>
              {frontShapes.map((shape, index) => (
                <ShapeRenderer key={index} shape={shape} />
              ))}
            </Group>
          </Layer>
        </Stage>

        {/* Top View Section */}
        <h3>Top View</h3>
        <Stage width={172} height={172}>
          <Layer>
            {selectedTooth && imageTopView && (
              <KonvaImage
                image={imageTopView}
                width={121}
                height={172}
                x={0}
                y={0}
              />
            )}
            <Group>
              {topShapes.map((shape, index) => (
                <ShapeRenderer key={index} shape={shape} />
              ))}
            </Group>
          </Layer>
        </Stage>
      </div>
    </div>
  );
}

export default CanvasComponent;
