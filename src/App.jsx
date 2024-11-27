// src/App.jsx
import React, { useState, useRef, useEffect } from "react";
import "./App.css";
import surfaceData from "./assets/surface.json";
import Navbar from "./components/Navbar";
import TeethMenu from "./components/TeethMenu";
import PathologyButtons from "./components/PathologyButtons";
import ToothImage from "./components/ToothImage";

function App() {
  const [uploadedImage, setUploadedImage] = useState(null);
  const [visibleSurfaces, setVisibleSurfaces] = useState({
    mesial: false,
    distal: false,
    buccal: false,
    palatal: false,
    incisal: false,
  });
  const [points, setPoints] = useState([]);
  const [isPathClosed, setIsPathClosed] = useState(false);
  const [svgPath, setSvgPath] = useState("");
  const [selectedPathology, setSelectedPathology] = useState(null);
  const [subButtons, setSubButtons] = useState([]);
  const [selectedTooth, setSelectedTooth] = useState(null);

  const imageRef = useRef(null);
  const canvasRef = useRef(null);
  const textareaRef = useRef(null);

  // Handle Image Upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setUploadedImage(reader.result);
        // Reset any existing drawings when a new image is uploaded
        handleReset();
      };
      reader.readAsDataURL(file);
    }
  };

  // Toggle Surface Visibility
  const toggleSurface = (surface) => {
    setVisibleSurfaces((prev) => ({
      ...prev,
      [surface]: !prev[surface],
    }));
  };

  // Handle Canvas Click
  const handleCanvasClick = (e) => {
    if (isPathClosed) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;
    const x = (e.clientX - rect.left) * scaleX;
    const y = (e.clientY - rect.top) * scaleY;

    const newPoints = [...points, { x, y }];
    setPoints(newPoints);

    // Check if the new point is close to the first point
    if (newPoints.length > 2) {
      const firstPoint = newPoints[0];
      const distance = Math.hypot(x - firstPoint.x, y - firstPoint.y);
      if (distance < 10) {
        // Threshold in pixels
        setIsPathClosed(true);
        setPoints(newPoints.slice(0, -1)); // Remove the last point
      }
    }
  };

  // Draw on Canvas
  const drawCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext("2d");
    context.clearRect(0, 0, canvas.width, canvas.height);

    if (points.length === 0) return;

    context.beginPath();
    context.moveTo(points[0].x, points[0].y);

    for (let i = 1; i < points.length; i++) {
      context.lineTo(points[i].x, points[i].y);
    }

    if (isPathClosed && points.length > 0) {
      context.closePath();
      context.fillStyle = "rgba(255, 122, 122, 0.5)";
      context.fill();
    }

    context.strokeStyle = "red";
    context.lineWidth = 2;
    context.stroke();

    // Draw small blue circles at each point
    points.forEach((point) => {
      context.beginPath();
      context.arc(point.x, point.y, 4, 0, Math.PI * 2);
      context.fillStyle = "blue";
      context.fill();
      context.closePath();
    });
  };

  // Update Canvas when points or path closure changes
  useEffect(() => {
    drawCanvas();
  }, [points, isPathClosed]);

  // Update SVG Path Textarea
  useEffect(() => {
    if (points.length === 0) {
      setSvgPath("");
      return;
    }

    let path = `M ${points[0].x.toFixed(2)} ${points[0].y.toFixed(2)} `;
    for (let i = 1; i < points.length; i++) {
      path += `L ${points[i].x.toFixed(2)} ${points[i].y.toFixed(2)} `;
    }
    if (isPathClosed) {
      path += "Z";
    }
    setSvgPath(path.trim());
  }, [points, isPathClosed]);

  // Handle Path Click from SVG Overlay
  const handlePathClick = (pathData) => {
    setSvgPath(pathData);
    // Optionally, you can parse the pathData and set points accordingly
    // This requires more complex parsing which is beyond this scope
  };

  // Handle Reset Functionality
  const handleReset = () => {
    setPoints([]);
    setIsPathClosed(false);
    setSvgPath("");
  };

  // Handle Copy All Functionality
  const handleCopyAll = () => {
    if (!svgPath) {
      alert("No SVG Path data to copy!");
      return;
    }
    navigator.clipboard
      .writeText(svgPath)
      .then(() => {
        alert("SVG Path data copied to clipboard!");
      })
      .catch((err) => {
        alert("Failed to copy!", err);
      });
  };

  // Handle Pathology Selection
  const handlePathologySelect = (pathology) => {
    setSelectedPathology(pathology);
    // Define sub-buttons based on pathology
    const pathologySubButtons = {
      Decay: ["Caries", "Cervical", "Root"],
      Fracture: ["Craze", "Crown", "Root"],
      "Tooth Wear": ["Attrition", "Abfraction", "Erosion"],
      Discoloration: ["Intrinsic", "Extrinsic"],
      Apical: ["Apical Abscess", "Periapical Cyst"],
      "Development Disorder": [
        "Amelogenesis Imperfecta",
        "Dentinogenesis Imperfecta",
      ],
      Dentin: ["Interdental", "Proximal"],
      Enamel: ["Surface Erosion", "Structural Defect"],
    };

    setSubButtons(pathologySubButtons[pathology] || []);
  };

  return (
    <div className="app-container">
      <Navbar />
      <div className="content-area">
        <TeethMenu setSelectedTooth={setSelectedTooth} />
        <div className="main-content">
          <PathologyButtons
            selectedPathology={selectedPathology}
            onPathologySelect={handlePathologySelect}
            subButtons={subButtons}
          />
          <ToothImage
            uploadedImage={uploadedImage}
            handleImageUpload={handleImageUpload}
            visibleSurfaces={visibleSurfaces}
            toggleSurface={toggleSurface}
            points={points}
            isPathClosed={isPathClosed}
            svgPath={svgPath}
            handlePathClick={handlePathClick}
            handleReset={handleReset}
            handleCopyAll={handleCopyAll}
            canvasRef={canvasRef}
            handleCanvasClick={handleCanvasClick}
            textareaRef={textareaRef}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
