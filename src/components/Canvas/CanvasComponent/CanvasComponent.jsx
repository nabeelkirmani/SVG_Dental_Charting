// src/components/Canvas/CanvasComponent/CanvasComponent.jsx

import React, { useContext, useEffect, useState, memo } from "react";
import {
  Stage,
  Layer,
  Image as KonvaImage,
  Group,
  Shape,
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
        <Shape
          sceneFunc={(context, shapeNode) => {
            context.beginPath();
            context.rect(shape.x, shape.y, shape.width, shape.height);
            context.closePath();
            context.fillStrokeShape(shapeNode);
          }}
          fill={shape.fill || "rgba(0,0,0,0.5)"}
        />
      );
    case "circle":
      return (
        <Shape
          sceneFunc={(context, shapeNode) => {
            context.beginPath();
            context.arc(shape.x, shape.y, shape.radius, 0, Math.PI * 2);
            context.closePath();
            context.fillStrokeShape(shapeNode);
          }}
          fill={shape.fill || "rgba(0,0,0,0.5)"}
        />
      );
    case "path":
      return <Path data={shape.data} fill={shape.fill || "rgba(0,0,0,0.5)"} />;
    // Add more shape types as needed
    default:
      return null;
  }
});

/**
 * CanvasComponent renders the Front and Top views of the selected tooth,
 * applying respective SVG shapes based on selected zones.
 */
function CanvasComponent() {
  const { selectedTooth, selectedZones } = useContext(SelectionContext);
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
   * whenever selectedTooth or selectedZones change.
   */
  useEffect(() => {
    if (selectedTooth && zoneShapes.teeth[selectedTooth]) {
      const toothData = zoneShapes.teeth[selectedTooth].zones;
      const fronts = [];
      const tops = [];

      selectedZones.forEach((zoneId) => {
        const zone = toothData[zoneId];
        if (zone) {
          if (zone.Front) {
            fronts.push(zone.Front);
          }
          if (zone.Top) {
            tops.push(zone.Top);
          }
        } else {
          console.warn(
            `Zone ID ${zoneId} not found for tooth ${selectedTooth}`
          );
        }
      });

      setFrontShapes(fronts);
      setTopShapes(tops);
    } else {
      if (selectedTooth) {
        console.warn(`Tooth ${selectedTooth} not found in zoneShapes.json`);
      }
      setFrontShapes([]);
      setTopShapes([]);
    }
  }, [selectedTooth, selectedZones]);

  return (
    <div className="teeth">
      <div className="tooth">
        {/* Front View Section */}
        <h3>Front View</h3>
        <Stage width={322} height={576}>
          <Layer>
            {selectedTooth && imageFrontView && (
              <KonvaImage
                image={imageFrontView}
                width={322}
                height={576}
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
        <Stage width={322} height={576}>
          <Layer>
            {selectedTooth && imageTopView && (
              <KonvaImage
                image={imageTopView}
                width={322}
                height={576}
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
