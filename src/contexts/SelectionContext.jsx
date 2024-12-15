// src/contexts/SelectionContext.jsx
import React, { createContext, useState } from "react";

export const SelectionContext = createContext();

export const SelectionProvider = ({ children }) => {
  const [selectedTooth, setSelectedTooth] = useState(null);
  const [selectedPathology, setSelectedPathology] = useState("");
  const [selectedZones, setSelectedZones] = useState([]);
  const [pathologyDetails, setPathologyDetails] = useState({});

  const [frontViewPoints, setFrontViewPoints] = useState([]);
  const [topViewPoints, setTopViewPoints] = useState([]);
  const [isFrontPathClosed, setIsFrontPathClosed] = useState(false);
  const [isTopPathClosed, setIsTopPathClosed] = useState(false);
  const [frontViewSvgPath, setFrontViewSvgPath] = useState("");
  const [topViewSvgPath, setTopViewSvgPath] = useState("");
  const [activeView, setActiveView] = useState("front"); // 'front' or 'top'
  const [isDrawing, setIsDrawing] = useState(false);

  const handleToothSelect = (tooth) => {
    setSelectedTooth(tooth);
  };

  const handlePathologyToggle = (pathology) => {
    setSelectedPathology((prevPathology) =>
      prevPathology === pathology ? "" : pathology
    );
    setPathologyDetails({});
    setSelectedZones([]);
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

  const handleViewChange = (view) => {
    setActiveView(view);
  };

  const handleReset = () => {
    if (activeView === "front") {
      setFrontViewPoints([]);
      setIsFrontPathClosed(false);
      setFrontViewSvgPath("");
    } else {
      setTopViewPoints([]);
      setIsTopPathClosed(false);
      setTopViewSvgPath("");
    }
    setIsDrawing(true);
  };

  const handleCopyPath = () => {
    const currentPath =
      activeView === "front" ? frontViewSvgPath : topViewSvgPath;
    if (!currentPath) {
      alert("No path to copy!");
      return;
    }
    navigator.clipboard
      .writeText(currentPath)
      .then(() => alert("Path copied to clipboard!"))
      .catch((err) => alert("Failed to copy path"));
  };

  const updateSVGPath = (currentPoints, closed, view) => {
    if (currentPoints.length === 0) {
      view === "front" ? setFrontViewSvgPath("") : setTopViewSvgPath("");
      return;
    }

    let path = `M ${currentPoints[0].x.toFixed(2)} ${currentPoints[0].y.toFixed(
      2
    )} `;
    for (let i = 1; i < currentPoints.length; i++) {
      path += `L ${currentPoints[i].x.toFixed(2)} ${currentPoints[i].y.toFixed(
        2
      )} `;
    }
    if (closed) {
      path += "Z";
    }

    if (view === "front") {
      setFrontViewSvgPath(path.trim());
    } else {
      setTopViewSvgPath(path.trim());
    }
  };

  const handleUndo = () => {
    if (activeView === "front") {
      const newPoints = frontViewPoints.slice(0, -1);
      setFrontViewPoints(newPoints);
      updateSVGPath(newPoints, false, "front");
    } else {
      const newPoints = topViewPoints.slice(0, -1);
      setTopViewPoints(newPoints);
      updateSVGPath(newPoints, false, "top");
    }
  };

  const canUndo =
    activeView === "front"
      ? frontViewPoints.length > 0 && !isFrontPathClosed
      : topViewPoints.length > 0 && !isTopPathClosed;

  const activateZone = (() => {
    // Always true for decay and tooth wear
    if (selectedPathology === "decay" || selectedPathology === "tooth wear") {
      return true;
    }

    // For other pathologies, check if we've reached a final sub-menu selection
    switch (selectedPathology) {
      case "fracture":
        return pathologyDetails.direction !== undefined;

      case "discoloration":
        return pathologyDetails.color !== undefined;

      case "apical":
        return pathologyDetails.answer !== undefined;

      case "development disorder":
        return pathologyDetails.answer !== undefined;

      default:
        return false;
    }
  })();

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
        activateZone,
        frontViewPoints,
        setFrontViewPoints,
        topViewPoints,
        setTopViewPoints,
        isFrontPathClosed,
        setIsFrontPathClosed,
        isTopPathClosed,
        setIsTopPathClosed,
        frontViewSvgPath,
        topViewSvgPath,
        activeView,
        handleViewChange,
        isDrawing,
        setIsDrawing,
        handleReset,
        handleCopyPath,
        updateSVGPath,
        handleUndo,
        canUndo,
      }}
    >
      {children}
    </SelectionContext.Provider>
  );
};
