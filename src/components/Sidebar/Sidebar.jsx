// src/components/Sidebar/Sidebar.jsx
import React from "react";
import "./Sidebar.scss";

/**
 * Sidebar component for application navigation.
 * Provides navigation controls including back and primary action buttons.
 * @param {Object} props - The props for the Sidebar component.
 * @param {Function} props.onPrimaryClick - Callback function triggered on primary action button click.
 * @param {Function} props.onBackClick - Callback function triggered on back button click.
 * @param {boolean} props.canGoBack - Indicates if the back navigation is possible.
 * @returns {JSX.Element} The rendered sidebar with navigation options.
 */
const Sidebar = ({ onPrimaryClick, onBackClick, canGoBack }) => {
  return (
    <aside>
      <nav>
        <ul>
          <li className={!canGoBack ? "disabled" : ""}>
            {/* Back Button */}
            <a
              href="#backbutton"
              className="back"
              onClick={(e) => {
                e.preventDefault();
                if (canGoBack) {
                  onBackClick();
                }
              }}
            >
              <svg width="21" height="21" viewBox="0 0 21 21">
                <path d="M10.5 0L0 10.5h7v10.5h7V10.5h7L10.5 0z" fill="white" />
              </svg>
            </a>
          </li>
          <li className="primary">
            <a
              href="#sidebarPrimary"
              onClick={(e) => {
                e.preventDefault();
                onPrimaryClick();
              }}
            >
              <svg width="28" height="28" viewBox="0 0 28 28">
                <path d="M2 2h24v24H2V2zm12 3v18l9-9h-18l9-9z" fill="white" />
              </svg>
            </a>
          </li>
          <li className="primary">
            <a href="#sidebarPrimary2">
              <svg width="28" height="28" viewBox="0 0 28 28">
                <path d="M14 2v24M2 14h24" stroke="white" strokeWidth="2" />
              </svg>
            </a>
          </li>
          <li className="primary">
            <a href="#sidebarPrimary3">
              <svg width="28" height="28" viewBox="0 0 28 28">
                <path
                  d="M4 4h20v20H4V4zm2 2v16h16V6H6zm4 4h8v8H10V10z"
                  fill="white"
                />
              </svg>
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
