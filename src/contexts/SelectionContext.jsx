// src/contexts/SelectionContext.jsx
import React, { createContext, useState } from "react";

export const SelectionContext = createContext();

export const SelectionProvider = ({ children }) => {
  const [selectedTooth, setSelectedTooth] = useState(1);
  const [activeMainButton, setActiveMainButton] = useState(null);
  const [activeSecondary, setActiveSecondary] = useState(null);
  const [activeCavitation, setActiveCavitation] = useState(null);
  const [activePulp, setActivePulp] = useState(null);
  const [activeClass, setActiveClass] = useState(null);

  const handleToothSelect = (tooth) => {
    setSelectedTooth(tooth);
    setActiveMainButton(null);
    setActiveSecondary(null);
    setActiveCavitation(null);
    setActivePulp(null);
    setActiveClass(null);
  };

  const handleMainButtonClick = (button) => {
    setActiveMainButton((prev) => (prev === button ? null : button));
  };

  const handleSecondaryClick = (type) => {
    setActiveSecondary((prev) => (prev === type ? null : type));
    setActiveCavitation(null);
    setActivePulp(null);
    setActiveClass(null);
  };

  const handleCavitationClick = (cavitation) => {
    setActiveCavitation((prev) => (prev === cavitation ? null : cavitation));
    setActivePulp(null);
    setActiveClass(null);
  };

  const handlePulpClick = (pulp) => {
    setActivePulp((prev) => (prev === pulp ? null : pulp));
    setActiveClass(null);
  };

  const handleClassClick = (cls) => {
    setActiveClass((prev) => (prev === cls ? null : cls));
  };

  return (
    <SelectionContext.Provider
      value={{
        selectedTooth,
        handleToothSelect,
        activeMainButton,
        handleMainButtonClick,
        activeSecondary,
        handleSecondaryClick,
        activeCavitation,
        handleCavitationClick,
        activePulp,
        handlePulpClick,
        activeClass,
        handleClassClick,
      }}
    >
      {children}
    </SelectionContext.Provider>
  );
};
