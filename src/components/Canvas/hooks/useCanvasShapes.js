// src/components/Canvas/hooks/useCanvasShapes.js

import { useState, useEffect } from "react";
import zoneShapes from "../../../data/zoneShapes.json";

export const useCanvasShapes = (
  selectedTooth,
  selectedPathology,
  selectedZones,
  pathologyDetails
) => {
  const [frontShapes, setFrontShapes] = useState([]);
  const [topShapes, setTopShapes] = useState([]);

  useEffect(() => {
    if (
      !selectedTooth ||
      !selectedPathology ||
      !zoneShapes.teeth[selectedTooth] ||
      !zoneShapes.teeth[selectedTooth].pathologies[selectedPathology]
    ) {
      setFrontShapes([]);
      setTopShapes([]);
      return;
    }

    const pathologyData =
      zoneShapes.teeth[selectedTooth].pathologies[selectedPathology];

    let fronts = [];
    let tops = [];

    const processShapes = (shapeData) => {
      if (!shapeData) return;
      if (shapeData.Front) fronts.push(shapeData.Front);
      if (shapeData.Top) tops.push(shapeData.Top);
    };

    // Helper function to capitalize the first letter
    const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

    // Handle different pathology types
    switch (selectedPathology.toLowerCase()) {
      case "decay": {
        selectedZones.forEach((zoneID) => {
          const zone = pathologyData.zones?.[zoneID];
          if (zone) processShapes(zone);
        });
        break;
      }

      case "tooth wear": {
        const { wearType, surface } = pathologyDetails;
        if (wearType && surface) {
          surface.forEach((surfaceType) => {
            const shapeData = pathologyData[wearType]?.[surfaceType];
            if (shapeData) processShapes(shapeData);
          });
        }
        break;
      }

      case "fracture": {
        const { fractureType, direction } = pathologyDetails;
        if (fractureType && direction) {
          const shapeData = pathologyData[fractureType]?.[direction];
          processShapes(shapeData);
        }
        break;
      }

      case "discoloration": {
        const { color } = pathologyDetails;
        if (color) {
          const capitalizedColor = capitalize(color);
          const shapeData = pathologyData[capitalizedColor];
          if (!shapeData) {
            console.warn(
              `Discoloration shape data not found for color: ${capitalizedColor}`
            );
          }
          processShapes(shapeData);
        }
        break;
      }

      case "apical": {
        const { answer } = pathologyDetails;
        if (answer) {
          const shapeData = pathologyData[answer];
          processShapes(shapeData);
        }
        break;
      }

      case "development disorder": {
        const { answer } = pathologyDetails;
        if (answer) {
          const shapeData = pathologyData[answer];
          processShapes(shapeData);
        }
        break;
      }

      default:
        setFrontShapes([]);
        setTopShapes([]);
    }

    setFrontShapes(fronts);
    setTopShapes(tops);
  }, [selectedTooth, selectedPathology, selectedZones, pathologyDetails]);

  return { frontShapes, topShapes };
};
