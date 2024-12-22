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
  const [shapesHistory, setShapesHistory] = useState({
    front: [],
    top: [],
  });

  useEffect(() => {
    if (
      !selectedTooth ||
      !selectedPathology ||
      !zoneShapes.teeth[selectedTooth] ||
      !zoneShapes.teeth[selectedTooth].pathologies[selectedPathology]
    ) {
      return;
    }

    const pathologyData =
      zoneShapes.teeth[selectedTooth].pathologies[selectedPathology];

    let newFrontShapes = [];
    let newTopShapes = [];

    const processShapes = (shapeData) => {
      if (!shapeData) return;

      if (shapeData.Front) {
        newFrontShapes.push(shapeData.Front);
      }
      if (shapeData.Top) {
        newTopShapes.push(shapeData.Top);
      }
    };

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
        if (fractureType && direction) {
          const shapeData = pathologyData[fractureType]?.[direction];
          if (shapeData) {
            processShapes(shapeData);
          }
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
    }

    // Add new shapes to history
    if (newFrontShapes.length > 0) {
      setShapesHistory((prev) => ({
        ...prev,
        front: [...prev.front, ...newFrontShapes],
      }));
    }
    if (newTopShapes.length > 0) {
      setShapesHistory((prev) => ({
        ...prev,
        top: [...prev.top, ...newTopShapes],
      }));
    }

    // Set current shapes to include both history and new shapes
    setFrontShapes([...shapesHistory.front, ...newFrontShapes]);
    setTopShapes([...shapesHistory.top, ...newTopShapes]);
  }, [selectedTooth, selectedPathology, selectedZones, pathologyDetails]);

  // Clear history when tooth changes
  useEffect(() => {
    setShapesHistory({
      front: [],
      top: [],
    });
  }, [selectedTooth]);

  return { frontShapes, topShapes };
};
