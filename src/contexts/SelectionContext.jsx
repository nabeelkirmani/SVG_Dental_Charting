// src/contexts/SelectionContext.jsx
import React, { createContext, useState } from "react";

export const SelectionContext = createContext();

export const SelectionProvider = ({ children }) => {
  const [selectedTooth, setSelectedTooth] = useState(null);
  const [selectedPathology, setSelectedPathology] = useState("");
  const [selectedZones, setSelectedZones] = useState([]);
  const [pathologyDetails, setPathologyDetails] = useState({
    stage: "dentin",
    cavitation: "cavitation",
    pulp: "involved",
    level: "c3",
  });

  const handleToothSelect = (tooth) => {
    setSelectedTooth(tooth);
  };

  const handlePathologyToggle = (pathology) => {
    setSelectedPathology((prevPathology) =>
      prevPathology === pathology ? "" : pathology
    );
  };

  const handleZoneToggle = (zone) => {
    setSelectedZones((prevZones) =>
      prevZones.includes(zone)
        ? prevZones.filter((z) => z !== zone)
        : [...prevZones, zone]
    );
  };

  const updatePathologyDetail = (key, value) => {
    setPathologyDetails((prevDetails) => ({
      ...prevDetails,
      [key]: value,
    }));
  };

  return (
    <SelectionContext.Provider
      value={{
        selectedTooth,
        handleToothSelect,
        selectedPathology,
        handlePathologyToggle,
        selectedZones,
        handleZoneToggle,
        pathologyDetails,
        updatePathologyDetail,
      }}
    >
      {children}
    </SelectionContext.Provider>
  );
};
