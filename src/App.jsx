// src/App.jsx
import React from "react";
import Sidebar from "./components/Sidebar/Sidebar.jsx";
import ToothWheel from "./ToothWheel/ToothWheel.jsx";
import MainContent from "./MainContent/MainContent.jsx";
import { SelectionProvider } from "./contexts/SelectionContext.jsx";
import "./App.scss";

function App() {
  return (
    <SelectionProvider>
      <div className="app">
        <Sidebar />
        <div className="main-view">
          <ToothWheel />
          <MainContent />
        </div>
      </div>
    </SelectionProvider>
  );
}

export default App;
