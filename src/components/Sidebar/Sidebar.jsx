// src/components/Sidebar/Sidebar.jsx
import React from "react";
import "./Sidebar.scss";

const Sidebar = () => {
  return (
    <aside>
      <nav>
        <ul>
          <li>
            {/* Back Button */}
            <a href="#backbutton" className="back">
              <svg width="21" height="21" viewBox="0 0 21 21">
                <path d="M10.5 0L0 10.5h7v10.5h7V10.5h7L10.5 0z" fill="white" />
              </svg>
            </a>
          </li>
          <li className="primary">
            <a href="#sidebarPrimary">
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
