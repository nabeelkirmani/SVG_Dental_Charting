// src/App.jsx
import React from "react";
import Sidebar from "./components/Sidebar/Sidebar.jsx";
import ToothWheel from "./components/ToothWheel/ToothWheel.jsx";
import MainContent from "./components/MainContent/MainContent.jsx";
import { SelectionProvider } from "./contexts/SelectionContext.jsx";
import "./App.scss";
import Canvas from "./components/Canvas/Canvas.jsx";

const App = () => {
  return (
    <SelectionProvider>
      <div className="app">
        <div data-view="nav-bar">
          <Sidebar />
        </div>
        <div data-view="main-container">
          <ToothWheel />
          <div data-view="patient-view">
            <MainContent />
            <Canvas />
          </div>
        </div>
      </div>
    </SelectionProvider>
  );
};

export default App;
