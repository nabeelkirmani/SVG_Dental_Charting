// src/components/Sidebar/Sidebar.jsx
import React from "react";
import "./Sidebar.scss";

function Sidebar() {
  return (
    <aside>
      <nav>
        <ul>
          <li>
            {/* Back Button */}
            <a href="#" className="back">
              <svg width="21" height="21" viewBox="0 0 21 21">
                {/* SVG content for back icon */}
              </svg>
            </a>
          </li>
          <li className="primary">
            <a href="#">
              <svg width="28" height="28" viewBox="0 0 28 28">
                {/* SVG content for chart icon */}
              </svg>
            </a>
          </li>
          <li className="primary">
            <a href="#">
              <svg width="28" height="28" viewBox="0 0 28 28">
                {/* SVG content for dashboard icon */}
              </svg>
            </a>
          </li>
          <li className="primary">
            <a href="#">
              <svg width="28" height="28" viewBox="0 0 28 28">
                {/* SVG content for report icon */}
              </svg>
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
