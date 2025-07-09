// src/components/Canvas/components/CanvasView.jsx
import { Stage, Layer, Image as KonvaImage, Group } from "react-konva";
import ShapeRenderer from "./ShapeRenderer";
import CanvasPoints from "./CanvasPoints";
import { isWithinBounds, adjustPoint, getGroupX } from "../utils/canvasHelpers";

/**
 * CanvasView component for rendering tooth images with interactive drawing capabilities
 * Displays tooth image, shapes, and drawing points on a Konva Stage
 * @param {Object} props - Component props
 * @param {string} props.view - Current view type ('front' or 'top')
 * @param {number} props.width - Canvas width
 * @param {number} props.height - Canvas height
 * @param {HTMLImageElement} props.image - Tooth image to display
 * @param {Array} props.shapes - Array of shape objects to render
 * @param {Array} props.points - Array of drawing points
 * @param {boolean} props.isPathClosed - Whether the current path is closed
 * @param {boolean} props.isDrawing - Whether drawing mode is active
 * @param {string} props.activeView - Currently active view ('front' or 'top')
 * @param {Function} props.handleDrawing - Function to handle drawing interactions
 * @returns {JSX.Element} Konva Stage with tooth image and drawing capabilities
 */
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
  /**
   * Handles click events on the Konva stage for drawing
   * @param {Object} e - Konva event object
   */
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
      <h3>{view === "front" ? "Front View" : "Top View"}</h3>
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
              width={view === "front" ? 122 : 121}
              height={height}
              x={getGroupX(view)}
              y={0}
            />
          )}
          <Group x={getGroupX(view)}>
            {shapes.map((shape, index) => (
              <ShapeRenderer key={index} shape={shape} />
            ))}
            <CanvasPoints points={points} isPathClosed={isPathClosed} />
          </Group>
        </Layer>
      </Stage>
    </div>
  );
};

export default CanvasView;
