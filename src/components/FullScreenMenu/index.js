// src/components/FullscreenMenu.jsx
import React, { useState } from "react";

import "./style.css";

export const FullScreenMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      {open && <div className="FullscreenMenu">hello</div>}
      <button
        className="FullscreenMenuToggler"
        style={{ color: open ? "white" : "black" }}
        onClick={() => setOpen(!open)}
      >
        <svg width="2rem" height="2rem" viewBox="-3 -2 24 24">
          <g stroke="currentColor" strokeWidth={2}>
            <line x1="0" y1="4" x2="18" y2="4" />
            <line x1="0" y1="10" x2="18" y2="10" />
            <line x1="0" y1="16" x2="18" y2="16" />
          </g>
        </svg>
      </button>
    </div>
  );
};
