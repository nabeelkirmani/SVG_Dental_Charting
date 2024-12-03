// src/components/Canvas/Canvas.jsx
import React, { useRef, useContext, useEffect } from "react";
import { Stage, Layer, Image as KonvaImage, Shape } from "react-konva";
import useImage from "use-image";
import { SelectionContext } from "../../contexts/SelectionContext.jsx";

function CanvasComponent() {
  const { selectedTooth, selectedZones } = useContext(SelectionContext);
  const [image] = useImage(`/assets/images/tooth${selectedTooth}.png`);
  const layerRef = useRef();

  useEffect(() => {
    // Update shapes based on selectedZones
  }, [selectedZones]);

  return (
    <Stage width={322} height={576}>
      <Layer ref={layerRef}>
        {image && <KonvaImage image={image} />}
        {/* Add Shapes for selected zones */}
      </Layer>
    </Stage>
  );
}

export default CanvasComponent;
