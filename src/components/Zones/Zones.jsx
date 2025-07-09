// src/components/Zones/Zones.jsx
import React, { useContext } from "react";
import "./Zones.scss";
import { SelectionContext } from "../../contexts/SelectionContext.jsx";

/**
 * Array of zone objects representing different areas on a tooth for dental charting.
 * Each zone has a unique value, a descriptive label, and an associated area identifier.
 * @type {Array<Object>}
 * @property {string} value - Unique identifier for the zone.
 * @property {string} label - Descriptive name of the zone.
 * @property {string} area - Identifier for the area on the tooth diagram.
 */
const zones = [
  { value: "1", label: "Cervical Buccal", area: "cervical1" },
  { value: "2", label: "Buccal", area: "direction1" },
  { value: "3", label: "Mesial", area: "direction2" },
  { value: "4", label: "Incisal", area: "direction3" },
  { value: "5", label: "Distal", area: "direction4" },
  { value: "6", label: "Palatal", area: "direction5" },
  { value: "7", label: "Cervical Palatal", area: "cervical2" },
  { value: "8", label: "Class 4 Mesial", area: "cusp1" },
  { value: "9", label: "Class 4 Distal", area: "cusp2" },
  { value: "10", label: "Buccal Surface", area: "cusp3" },
  { value: "11", label: "Palatal Surface", area: "cusp4" },
];

/**
 * Zones component for selecting specific areas on a tooth in dental charting.
 * Renders a list of zones as checkboxes for user interaction.
 * @returns {JSX.Element} The rendered list of zone options for selection.
 */
const Zones = () => {
  /**
   * Context values from SelectionContext for managing zone selections.
   * @type {Object}
   * @property {Array<string>} selectedZones - Array of selected zone values.
   * @property {Function} handleZoneToggle - Function to toggle the selection of a zone.
   * @property {boolean} activateZone - Indicates if zone selection is enabled.
   */
  const { selectedZones, handleZoneToggle, activateZone } =
    useContext(SelectionContext);

  return (
    <ul className="zones">
      {zones.map((zone) => (
        <li
          key={zone.value}
          className={`pad ${zone.area} ${!activateZone ? "disabled" : ""}`}
        >
          <input
            type="checkbox"
            id={`pad-${zone.value}`}
            value={zone.value}
            checked={selectedZones.includes(zone.value)}
            onChange={() => handleZoneToggle(zone.value)}
            disabled={!activateZone}
          />
          <label htmlFor={`pad-${zone.value}`}>{zone.label}</label>
        </li>
      ))}
    </ul>
  );
};

export default Zones;
