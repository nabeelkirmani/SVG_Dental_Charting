// src/contexts/SelectionContext.jsx
import React, { createContext, useState } from "react";

export const SelectionContext = createContext();

export const SelectionProvider = ({ children }) => {
  const [selectedTooth, setSelectedTooth] = useState(22);
  const [selectedPathology, setSelectedPathology] = useState("decay");
  const [selectedZones, setSelectedZones] = useState([]);

  const handleToothSelect = (tooth) => {
    setSelectedTooth(tooth);
  };

  const handlePathologySelect = (pathology) => {
    setSelectedPathology(pathology);
  };

  const handleZoneToggle = (zone) => {
    setSelectedZones((prevZones) =>
      prevZones.includes(zone)
        ? prevZones.filter((z) => z !== zone)
        : [...prevZones, zone]
    );
  };

  return (
    <SelectionContext.Provider
      value={{
        selectedTooth,
        handleToothSelect,
        selectedPathology,
        handlePathologySelect,
        selectedZones,
        handleZoneToggle,
      }}
    >
      {children}
    </SelectionContext.Provider>
  );
};
