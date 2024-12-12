// src/components/Canvas/components/CanvasView.jsx
import React from 'react';
import { Stage, Layer, Image as KonvaImage, Group } from 'react-konva';
import ShapeRenderer from './ShapeRenderer';
import CanvasPoints from './CanvasPoints';
import { isWithinBounds, adjustPoint, getGroupX } from '../utils/canvasHelpers';

const CanvasView = ({
  view,
  width,
  height,
  image,
  shapes,
  points,
  isPathClosed,
  isDrawing,
  activeView,
  handleDrawing,
}) => {
  const handleStageClick = (e) => {
    if (!isDrawing) return;

    const stage = e.target.getStage();
    const point = stage.getPointerPosition();
    const groupX = getGroupX(view);
    const adjustedPoint = adjustPoint(point, groupX);

    if (!isWithinBounds(adjustedPoint, view)) {
      console.log("Click outside tooth image area");
      return;
    }

    handleDrawing(adjustedPoint);
  };

  return (
    <div className="tooth">
      <h3>{view === 'front' ? 'Front View' : 'Top View'}</h3>
      <Stage
        width={width}
        height={height}
        onClick={handleStageClick}
        style={{
          cursor: isDrawing && activeView === view ? "crosshair" : "default",
        }}
      >
        <Layer>
          {image && (
            <KonvaImage
              image={image}
              width={view === 'front' ? 122 : 121}
              height={height}
              x={getGroupX(view)}
              y={0}
            />
          )}
          <Group x={getGroupX(view)}>
            {shapes.map((shape, index) => (
              <ShapeRenderer key={index} shape={shape} />
            ))}
            <CanvasPoints
              points={points}
              isPathClosed={isPathClosed}
            />
          </Group>
        </Layer>
      </Stage>
    </div>
  );
};

export default CanvasView;