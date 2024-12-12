// src/components/Canvas/hooks/useCanvasShapes.js
import { useState, useEffect } from 'react';
import zoneShapes from '../../../data/zoneShapes.json';

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

  return { frontShapes, topShapes };
};