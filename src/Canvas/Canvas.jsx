// src/components/Canvas/Canvas.jsx
import React, { useRef, useContext } from 'react';
import { Stage, Layer, Image, Shape } from 'react-konva';
import useImage from 'use-image';
import { SelectionContext } from '../contexts/SelectionContext';

function CanvasComponent() {
  const { selectedTooth, selectedZones } = useContext(SelectionContext);
  const [image] = useImage(`/assets/images/tooth${selectedTooth}.png`);
  const layerRef = useRef();

  // Define shapes based on selected zones
  const shapes = selectedZones.map((zone) => {
    // Return a shape corresponding to the zone
    // For example, a rectangle or custom path
    // You'll need to map zones to coordinates
  });

  return (
    <Stage width={300} height={400}>
      <Layer ref={layerRef}>
        <Image image={image} />
        {shapes.map((shapeProps, index) => (
          <Shape key={index} {...shapeProps} />
        ))}
      </Layer>
    </Stage>
  );
}

export default CanvasComponent;