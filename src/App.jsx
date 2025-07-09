// src/App.jsx
import { useState } from "react";
import Sidebar from "./components/Sidebar/Sidebar.jsx";
import ToothWheel from "./components/ToothWheel/ToothWheel.jsx";
import MainContent from "./components/MainContent/MainContent.jsx";
import Welcome from "./components/Welcome/Welcome.jsx";
import { SelectionProvider } from "./contexts/SelectionContext.jsx";
import "./App.scss";
import Canvas from "./components/Canvas/Canvas.jsx";

/**
 * Main application component for the Dental Charting system.
 * Manages navigation between different views such as Welcome and Pathology screens.
 * Provides context for selection state across components.
 * @returns {JSX.Element} The rendered application layout with navigation and content views.
 */
const App = () => {
  /**
   * State to track navigation history of views.
   * Starts with 'welcome' view and updates as user navigates through the app.
   * @type {string[]}
   */
  const [viewHistory, setViewHistory] = useState(["welcome"]);

  /**
   * Navigates to a new view by appending it to the view history.
   * @param {string} newView - The identifier of the view to navigate to.
   */
  const navigateToView = (newView) => {
    setViewHistory((prev) => [...prev, newView]);
  };

  /**
   * Navigates back to the previous view by removing the last entry from view history.
   * Only triggers if there is more than one view in history.
   */
  const goBack = () => {
    if (viewHistory.length > 1) {
      setViewHistory((prev) => prev.slice(0, -1));
    }
  };

  const currentView = viewHistory[viewHistory.length - 1];

  /**
   * Handles navigation specifically to the Pathology view.
   * Triggers navigation to 'pathology' view when called.
   */
  const handlePathologyNavigation = () => {
    navigateToView("pathology");
  };

  /**
   * Renders the application layout based on the current view.
   * Wraps content with SelectionProvider for context sharing.
   * Conditionally renders Welcome or Pathology view with associated components.
   */
  return (
    <SelectionProvider>
      <div className="app">
        <div data-view="nav-bar">
          <Sidebar
            onPrimaryClick={handlePathologyNavigation}
            onBackClick={goBack}
            canGoBack={viewHistory.length > 1}
          />
        </div>
        <div data-view="main-container">
          {currentView === "pathology" ? (
            <>
              <ToothWheel />
              <div data-view="patient-view">
                <MainContent onClose={goBack} />
                <Canvas />
              </div>
            </>
          ) : (
            <Welcome onPathologyClick={handlePathologyNavigation} />
          )}
        </div>
      </div>
    </SelectionProvider>
  );
};

export default App;
