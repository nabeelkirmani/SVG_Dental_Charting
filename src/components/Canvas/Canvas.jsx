//src/components/Canvas/Canvas.jsx
import "./Canvas.scss";
import CanvasComponent from "./CanvasComponent/CanvasComponent";

const Canvas = () => {
  return (
    <div className="canvas">
      <div className="visualization">
        <CanvasComponent />
      </div>
    </div>
  );
};

export default Canvas;
