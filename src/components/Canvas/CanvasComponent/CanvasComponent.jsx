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
import zoneShapes from "../../../data/zoneShapes.json";
import "./CanvasComponent.module.scss";

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

function CanvasComponent() {
  const {
    selectedTooth,
    selectedZones,
    selectedPathology,
    pathologyDetails,
    frontViewPoints,
    setFrontViewPoints,
    topViewPoints,
    setTopViewPoints,
    isFrontPathClosed,
    setIsFrontPathClosed,
    isTopPathClosed,
    setIsTopPathClosed,
    activeView,
    isDrawing,
    updateSVGPath,
  } = useContext(SelectionContext);

  const [imageFrontView] = useImage(
    selectedTooth ? toothImagesFrontView[selectedTooth] : null
  );
  const [imageTopView] = useImage(
    selectedTooth ? toothImagesTopView[selectedTooth] : null
  );

  const [frontShapes, setFrontShapes] = useState([]);
  const [topShapes, setTopShapes] = useState([]);

  const handleStageClick = (e, view) => {
    if (!isDrawing) return;

    const stage = e.target.getStage();
    const point = stage.getPointerPosition();

    const groupX = view === "front" ? (322 - 122) / 2 : (172 - 121) / 2;
    const adjustedPoint = {
      x: point.x - groupX,
      y: point.y,
    };

    const isWithinBounds =
      view === "front"
        ? adjustedPoint.x >= 0 &&
          adjustedPoint.x <= 122 &&
          adjustedPoint.y >= 0 &&
          adjustedPoint.y <= 380
        : adjustedPoint.x >= 0 &&
          adjustedPoint.x <= 121 &&
          adjustedPoint.y >= 0 &&
          adjustedPoint.y <= 172;

    if (!isWithinBounds) {
      console.log("Click outside tooth image area");
      return;
    }

    const currentPoints = view === "front" ? frontViewPoints : topViewPoints;
    const newPoints = [...currentPoints, adjustedPoint];

    if (newPoints.length > 2) {
      const firstPoint = newPoints[0];
      const distance = Math.hypot(
        adjustedPoint.x - firstPoint.x,
        adjustedPoint.y - firstPoint.y
      );
      if (distance < 10) {
        if (view === "front") {
          setIsFrontPathClosed(true);
          setFrontViewPoints(newPoints.slice(0, -1));
          updateSVGPath(newPoints.slice(0, -1), true, "front");
        } else {
          setIsTopPathClosed(true);
          setTopViewPoints(newPoints.slice(0, -1));
          updateSVGPath(newPoints.slice(0, -1), true, "top");
        }
        return;
      }
    }

    if (view === "front") {
      setFrontViewPoints(newPoints);
      updateSVGPath(newPoints, false, "front");
    } else {
      setTopViewPoints(newPoints);
      updateSVGPath(newPoints, false, "top");
    }
  };

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

      if (
        selectedPathology.toLowerCase() === "decay" ||
        selectedPathology.toLowerCase() === "tooth wear"
      ) {
        selectedZones.forEach((zoneId) => {
          const zone = pathologyData.zones[zoneId];
          if (zone) {
            if (zone.Front) fronts.push(zone.Front);
            if (zone.Top) tops.push(zone.Top);
          }
        });
      } else {
        if (Object.keys(pathologyDetails).length > 0) {
          const detailKey = Object.keys(pathologyDetails)[0];
          const detailValue = pathologyDetails[detailKey];
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
        <h3>Front View</h3>
        <Stage
          width={322}
          height={380}
          onClick={(e) => handleStageClick(e, "front")}
          style={{
            cursor:
              isDrawing && activeView === "front" ? "crosshair" : "default",
          }}
        >
          <Layer>
            {selectedTooth && imageFrontView && (
              <KonvaImage
                image={imageFrontView}
                width={122}
                height={380}
                x={(322 - 122) / 2}
                y={0}
              />
            )}
            <Group x={(322 - 122) / 2}>
              {frontShapes.map((shape, index) => (
                <ShapeRenderer key={index} shape={shape} />
              ))}
              {frontViewPoints.length > 0 && (
                <Line
                  points={frontViewPoints.flatMap((p) => [p.x, p.y])}
                  stroke="red"
                  strokeWidth={2}
                  closed={isFrontPathClosed}
                  fill={isFrontPathClosed ? "rgba(255, 0, 0, 0.2)" : undefined}
                />
              )}
              {frontViewPoints.map((point, i) => (
                <Circle
                  key={i}
                  x={point.x}
                  y={point.y}
                  radius={4}
                  fill="blue"
                />
              ))}
            </Group>
          </Layer>
        </Stage>
      </div>
      <div className="tooth">
        <h3>Top View</h3>
        <Stage
          width={172}
          height={172}
          onClick={(e) => handleStageClick(e, "top")}
          style={{
            cursor: isDrawing && activeView === "top" ? "crosshair" : "default",
          }}
        >
          <Layer>
            {selectedTooth && imageTopView && (
              <KonvaImage
                image={imageTopView}
                width={121}
                height={172}
                x={(172 - 121) / 2}
                y={0}
              />
            )}
            <Group x={(172 - 121) / 2}>
              {topShapes.map((shape, index) => (
                <ShapeRenderer key={index} shape={shape} />
              ))}
              {topViewPoints.length > 0 && (
                <Line
                  points={topViewPoints.flatMap((p) => [p.x, p.y])}
                  stroke="red"
                  strokeWidth={2}
                  closed={isTopPathClosed}
                  fill={isTopPathClosed ? "rgba(255, 0, 0, 0.2)" : undefined}
                />
              )}
              {topViewPoints.map((point, i) => (
                <Circle
                  key={i}
                  x={point.x}
                  y={point.y}
                  radius={4}
                  fill="blue"
                />
              ))}
            </Group>
          </Layer>
        </Stage>
      </div>
    </div>
  );
}

export default CanvasComponent;
