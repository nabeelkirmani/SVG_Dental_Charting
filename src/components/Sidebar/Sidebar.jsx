// src/components/Sidebar/Sidebar.jsx
import React from "react";
import "./Sidebar.scss";

function Sidebar() {
  return (
    <aside className="sidebar">
      <nav>
        <ul>
          <li>
            {/* Back Button */}
            <a href="#" className="back">
              <svg width="21" height="21" viewBox="0 0 21 21">
                {/* SVG content */}
              </svg>
            </a>
          </li>
          <li className="primary">
            <a href="#">
              <svg width="28" height="28" viewBox="0 0 28 28">
                {/* SVG content for Chart */}
              </svg>
            </a>
          </li>
          {/* Add more navigation items as needed */}
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
