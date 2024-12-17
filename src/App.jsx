// src/App.jsx
import React, { useState } from "react";
import Sidebar from "./components/Sidebar/Sidebar.jsx";
import ToothWheel from "./components/ToothWheel/ToothWheel.jsx";
import MainContent from "./components/MainContent/MainContent.jsx";
import Welcome from "./components/Welcome/Welcome.jsx";
import { SelectionProvider } from "./contexts/SelectionContext.jsx";
import "./App.scss";
import Canvas from "./components/Canvas/Canvas.jsx";

const App = () => {
  const [viewHistory, setViewHistory] = useState(["welcome"]);

  const navigateToView = (newView) => {
    setViewHistory((prev) => [...prev, newView]);
  };

  const goBack = () => {
    if (viewHistory.length > 1) {
      setViewHistory((prev) => prev.slice(0, -1));
    }
  };

  const currentView = viewHistory[viewHistory.length - 1];

  const handleSidebarPrimaryClick = () => {
    navigateToView("pathology");
  };

  return (
    <SelectionProvider>
      <div className="app">
        <div data-view="nav-bar">
          <Sidebar
            onPrimaryClick={handleSidebarPrimaryClick}
            onBackClick={goBack}
            canGoBack={viewHistory.length > 1}
          />
        </div>
        <div data-view="main-container">
          {currentView === "pathology" ? (
            <>
              <ToothWheel />
              <div data-view="patient-view">
                <MainContent />
                <Canvas />
              </div>
            </>
          ) : (
            <Welcome />
          )}
        </div>
      </div>
    </SelectionProvider>
  );
};

export default App;
