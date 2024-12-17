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
      console.error(
        `Shape data for pathology "${selectedPathology}" not found.`
      );
      return;
    }

    const pathologyData =
      zoneShapes.teeth[selectedTooth].pathologies[selectedPathology];

    console.debug("Pathology Data Retrieved:", pathologyData);

    let fronts = [];
    let tops = [];

    const processShapes = (shapeData) => {
      if (!shapeData) {
        console.debug("No shape data found:", shapeData);
        return;
      }
      console.debug("Processing shape data:", shapeData);
      if (shapeData.Front) fronts.push(shapeData.Front);
      if (shapeData.Top) tops.push(shapeData.Top);
    };

    // Handle different pathology types
    switch (selectedPathology) {
      case "decay": {
        if (Array.isArray(selectedZones)) {
          selectedZones.forEach((zoneID) => {
            const zone = pathologyData.zones?.[zoneID];
            if (zone) processShapes(zone);
          });
        }
        break;
      }

      case "toothWear": {
        const { wearType, surface } = pathologyDetails;
        if (wearType && surface && Array.isArray(surface)) {
          surface.forEach((surfaceType) => {
            const shapeData = pathologyData[wearType]?.[surfaceType];
            if (shapeData) processShapes(shapeData);
          });
        }
        break;
      }

      case "fracture": {
        const { fractureType, direction } = pathologyDetails;
        if (typeof fractureType === "string" && typeof direction === "string") {
          const shapeData = pathologyData[fractureType]?.[direction];
          if (shapeData) processShapes(shapeData);
        }
        break;
      }

      case "discoloration": {
        const { color } = pathologyDetails;
        if (typeof color === "string") {
          const shapeData = pathologyData[color];
          if (shapeData) processShapes(shapeData);
        }
        break;
      }

      case "apical":
      case "developmentDisorder": {
        const { answer } = pathologyDetails;
        if (typeof answer === "string") {
          const shapeData = pathologyData[answer];
          if (shapeData) processShapes(shapeData);
        }
        break;
      }

      default:
        setFrontShapes([]);
        setTopShapes([]);
        console.error(
          `Shape data for pathology "${selectedPathology}" not found.`
        );
        break;
    }

    setFrontShapes(fronts);
    setTopShapes(tops);
  }, [selectedTooth, selectedPathology, selectedZones, pathologyDetails]);

  return { frontShapes, topShapes };
};
