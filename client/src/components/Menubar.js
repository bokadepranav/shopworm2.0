import React from "react";

export default function Menubar() {
  return (
    <div className="menubar-container">
      <div className="menubar-item-wrapper">
        <a href="/" className="menubar-item-link">
          <span className="menubar-item">HOME</span>
        </a>
        <a href="/" className="menubar-item-link">
          <span className="menubar-item">SHOP</span>
        </a>
        <a href="/" className="menubar-item-link">
          <span className="menubar-item">BLOG</span>
        </a>
        <a href="/" className="menubar-item-link">
          <span className="menubar-item">ABOUT</span>
        </a>
        <a href="/" className="menubar-item-link">
          <span className="menubar-item">CONTACT</span>
        </a>
      </div>
    </div>
  );
}
