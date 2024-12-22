// src/contexts/SelectionContext.jsx
import React, { createContext, useState, useEffect } from "react";

export const SelectionContext = createContext();

export const SelectionProvider = ({ children }) => {
  const [selectedTooth, setSelectedTooth] = useState(null);
  const [selectedPathology, setSelectedPathology] = useState("");
  const [selectedZones, setSelectedZones] = useState([]);
  const [pathologyDetails, setPathologyDetails] = useState({});

  // Drawing points, etc.:
  const [frontViewPoints, setFrontViewPoints] = useState([]);
  const [topViewPoints, setTopViewPoints] = useState([]);
  const [isFrontPathClosed, setIsFrontPathClosed] = useState(false);
  const [isTopPathClosed, setIsTopPathClosed] = useState(false);
  const [frontViewSvgPath, setFrontViewSvgPath] = useState("");
  const [topViewSvgPath, setTopViewSvgPath] = useState("");
  const [activeView, setActiveView] = useState("front");
  const [isDrawing, setIsDrawing] = useState(false);

  // Local "database" of saved teeth data.
  // This can store multiple teeth for a single patient.
  // Key: tooth number; Value: all details for that tooth
  const [savedTeethData, setSavedTeethData] = useState({}); // TODO: Check if it should be useState([])

  // On app load, read from localStorage if present
  useEffect(() => {
    const dataFromStorage = localStorage.getItem("patientData");
    if (dataFromStorage) {
      setSavedTeethData(JSON.parse(dataFromStorage));
    }
  }, []);

  // 1. Dentist name & Patient name (hardcoded):
  const dentistName = "Dentist1";
  const patientName = "Patient1";

  // Handlers
  const handleToothSelect = (tooth) => {
    setSelectedTooth(tooth);
  };

  const handlePathologyToggle = (pathology) => {
    setSelectedPathology((prev) => (prev === pathology ? "" : pathology));
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

  // Saving all relevant data
  const saveToothData = async () => {
    if (!selectedTooth || !selectedPathology) {
      console.error("Missing required data");
      return;
    }

    const toothData = {
      dentist: dentistName,
      patient: patientName,
      toothNumber: selectedTooth,
      pathology: selectedPathology,
      pathologyDetails,
      zones: selectedZones,
      shapes: {
        front: frontViewSvgPath,
        top: topViewSvgPath,
      },
      timestamp: new Date().toISOString(),
    };

    console.log("Sending toothData to server:", toothData);

    try {
      const response = await fetch("http://localhost:3001/api/saveTooth", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(toothData),
      });

      if (!response.ok) {
        throw new Error(`Server error: ${response.status}`);
      }

      const result = await response.json();
      console.log("Server response:", result);
      alert("Data saved successfully to server!");

      // Update local state
      setSavedTeethData((prevData) => {
        const updatedData = {
          ...prevData,
          [selectedTooth]: {
            ...toothData,
          },
        };
        localStorage.setItem("patientData", JSON.stringify(updatedData));
        return updatedData;
      });

      // 2) Clear local selections if you’d like a fresh form
      setSelectedZones([]);
      setPathologyDetails({});
      setSelectedPathology("");
      setFrontViewPoints([]);
      setTopViewPoints([]);
      setFrontViewSvgPath("");
      setTopViewSvgPath("");
      setIsFrontPathClosed(false);
      setIsTopPathClosed(false);
    } catch (error) {
      console.error("Error saving tooth data:", error);
      alert("Error saving data. Check console or server log.");
    }
  };

  const canUndo =
    activeView === "front"
      ? frontViewPoints.length > 0 && !isFrontPathClosed
      : topViewPoints.length > 0 && !isTopPathClosed;

  // Evaluate whether Zones should be enabled based on selected pathology
  // TODO: Check if the old method of checking for Decay was better.
  const activateZone = selectedPathology === "decay";

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
        savedTeethData,
        saveToothData,
        dentistName,
        patientName,
      }}
    >
      {children}
    </SelectionContext.Provider>
  );
};
