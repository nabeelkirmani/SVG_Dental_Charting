// src/components/PathDrawer/PathDrawer.jsx
import { useContext } from "react";
import "./PathDrawer.scss";
import { SelectionContext } from "../../contexts/SelectionContext";

/**
 * PathDrawer component providing drawing controls and SVG path display
 * Includes view selection, path display, and drawing control buttons
 * @returns {JSX.Element} Drawing controls interface
 */
function PathDrawer() {
  const {
    frontViewSvgPath,
    topViewSvgPath,
    isDrawing,
    setIsDrawing,
    handleReset,
    handleCopyPath,
    activeView,
    handleViewChange,
    handleUndo,
    canUndo,
  } = useContext(SelectionContext);

  return (
    <div className="drawing-controls">
      <div className="view-selector">
        <button
          className={activeView === "front" ? "active" : ""}
          onClick={() => handleViewChange("front")}
        >
          Front View
        </button>
        <button
          className={activeView === "top" ? "active" : ""}
          onClick={() => handleViewChange("top")}
        >
          Top View
        </button>
      </div>
      <textarea
        value={activeView === "front" ? frontViewSvgPath : topViewSvgPath}
        readOnly
        placeholder="SVG path will appear here..."
      />
      <div className="drawing-buttons">
        <button onClick={() => setIsDrawing(true)}>Start Drawing</button>
        <button onClick={handleReset}>Reset</button>
        <button onClick={handleCopyPath}>Copy Path</button>
        <button onClick={handleUndo} disabled={!canUndo || !isDrawing}>
          Undo
        </button>
      </div>
    </div>
  );
}

export default PathDrawer;
