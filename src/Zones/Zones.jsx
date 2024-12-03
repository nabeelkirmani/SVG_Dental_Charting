// src/components/Zones/Zones.jsx
import React, { useContext } from "react";
import "./Zones.scss";
import { SelectionContext } from "../contexts/SelectionContext";

const zones = [
  "Cervical Buccal",
  "Buccal",
  "Mesial",
  "Incisal",
  "Distal",
  "Palatal",
  "Cervical Palatal",
  "Class 4 Mesial",
  "Class 4 Distal",
  "Buccal Surface",
  "Palatal Surface",
];

function Zones() {
  const { selectedZones, handleZoneToggle } = useContext(SelectionContext);

  return (
    <ul className="zones">
      {zones.map((zone, index) => (
        <li key={zone}>
          <label>
            <input
              type="checkbox"
              value={zone}
              checked={selectedZones.includes(zone)}
              onChange={() => handleZoneToggle(zone)}
            />
            {zone}
          </label>
        </li>
      ))}
    </ul>
  );
}

export default Zones;
