// src/App.jsx
import React from "react";
import Sidebar from "./components/Sidebar/Sidebar.jsx";
import ToothWheel from "./components/ToothWheel/ToothWheel.jsx";
import MainContent from "./components/MainContent/MainContent.jsx";
import { SelectionProvider } from "./contexts/SelectionContext.jsx";
import "./App.scss";

function App() {
  return (
    <SelectionProvider>
      <div className="app">
        <div data-view="patient">
          <Sidebar />
          <main data-view="tooth">
            <ToothWheel />
            <MainContent />
          </main>
        </div>
      </div>
    </SelectionProvider>
  );
}

export default App;
