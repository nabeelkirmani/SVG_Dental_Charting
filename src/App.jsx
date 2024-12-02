// src/App.jsx
import React from "react";
import "./App.scss";
import Navbar from "./components/Navbar/Navbar.jsx";
import ToothNumbers from "./components/ToothNumbers/ToothNumbers.jsx";
import ToothView from "./components/ToothView/ToothView.jsx";
import Controls from "./components/Controls/Controls.jsx";
import { SelectionProvider } from "./contexts/SelectionContext.jsx";

function App() {
  return (
    <SelectionProvider>
      <div className="app-container">
        <Navbar />
        <ToothNumbers />
        <div className="main-content">
          <ToothView />
          <Controls />
        </div>
      </div>
    </SelectionProvider>
  );
}

export default App;
