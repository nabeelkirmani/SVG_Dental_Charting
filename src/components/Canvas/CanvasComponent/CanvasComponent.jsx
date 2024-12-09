//src/components/Canvas/CanvasComponent/CanvasComponent.jsx
import React, { useContext, useEffect, useRef } from "react";
import { Stage, Layer, Image as KonvaImage, Group, Shape } from "react-konva";
import useImage from "use-image";
import { SelectionContext } from "../../../contexts/SelectionContext.jsx";
import {
  toothImagesFrontView,
  toothImagesTopView,
} from "../../../assets/images/index.js";
import "./CanvasComponent.scss";

function CanvasComponent() {
  const { selectedTooth, selectedZones } = useContext(SelectionContext);
  const [imageFrontVIew] = useImage(
    selectedTooth ? toothImagesFrontView[selectedTooth] : null
  );
  const [imageTopView] = useImage(
    selectedTooth ? toothImagesTopView[selectedTooth] : null
  );
  const layerRef = useRef(null);

  // Define coordinates or paths for each zone
  const zoneShapes = {
    // Example zones with coordinates or shapes
    // Replace with actual coordinates matching your images
    1: { type: "rect", x: 50, y: 50, width: 100, height: 50 },
    2: { type: "circle", x: 150, y: 100, radius: 30 },
    // Add more zones as needed
  };

  return (
    <div className="teeth">
      <div className="tooth">
        {/* Render the selected tooth front view */}
        <Stage width={322} height={576}>
          <Layer ref={layerRef}>
            {selectedTooth && imageFrontVIew && (
              <KonvaImage
                image={imageFrontVIew}
                width={322}
                height={576}
                x={0}
                y={0}
              />
            )}
            <Group>
              {selectedZones.map((zoneId) => {
                const shapeProps = zoneShapes[zoneId];
                if (!shapeProps) return null;
                if (shapeProps.type === "rect") {
                  return (
                    <Shape
                      key={zoneId}
                      sceneFunc={(context, shape) => {
                        context.beginPath();
                        context.rect(
                          shapeProps.x,
                          shapeProps.y,
                          shapeProps.width,
                          shapeProps.height
                        );
                        context.closePath();
                        context.fillStrokeShape(shape);
                      }}
                      fill="rgba(255, 0, 0, 0.5)"
                    />
                  );
                } else if (shapeProps.type === "circle") {
                  return (
                    <Shape
                      key={zoneId}
                      sceneFunc={(context, shape) => {
                        context.beginPath();
                        context.arc(
                          shapeProps.x,
                          shapeProps.y,
                          shapeProps.radius,
                          0,
                          Math.PI * 2
                        );
                        context.closePath();
                        context.fillStrokeShape(shape);
                      }}
                      fill="rgba(0, 255, 0, 0.5)"
                    />
                  );
                }
                // Add more shape types as needed
                return null;
              })}
            </Group>
          </Layer>
        </Stage>
        {/* Render the front view of the tooth */}
        <Stage width={322} height={576}>
          <Layer ref={layerRef}>
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
              {selectedZones.map((zoneId) => {
                const shapeProps = zoneShapes[zoneId];
                if (!shapeProps) return null;
                if (shapeProps.type === "rect") {
                  return (
                    <Shape
                      key={zoneId}
                      sceneFunc={(context, shape) => {
                        context.beginPath();
                        context.rect(
                          shapeProps.x,
                          shapeProps.y,
                          shapeProps.width,
                          shapeProps.height
                        );
                        context.closePath();
                        context.fillStrokeShape(shape);
                      }}
                      fill="rgba(255, 0, 0, 0.5)"
                    />
                  );
                } else if (shapeProps.type === "circle") {
                  return (
                    <Shape
                      key={zoneId}
                      sceneFunc={(context, shape) => {
                        context.beginPath();
                        context.arc(
                          shapeProps.x,
                          shapeProps.y,
                          shapeProps.radius,
                          0,
                          Math.PI * 2
                        );
                        context.closePath();
                        context.fillStrokeShape(shape);
                      }}
                      fill="rgba(0, 255, 0, 0.5)"
                    />
                  );
                }
                // Add more shape types as needed
                return null;
              })}
            </Group>
          </Layer>
        </Stage>
      </div>
    </div>
  );
}

export default CanvasComponent;
