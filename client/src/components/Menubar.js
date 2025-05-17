import React, { useState } from "react";
import {Link} from "react-router-dom";

export default function Menubar() {

  const [activePage, setActivePage] = useState(document.getElementById("HOME"));

  const handleLinkClick = (currPage) => {
    activePage.classList.remove("active");

    setActivePage(document.getElementById(currPage));
    activePage.classList.add("active");
  }

  return (
    <div className="menubar-container">
      <div className="menubar-item-wrapper">
        <Link to="/" className="menubar-item-link">
          <span className="menubar-item active" onClick={handleLinkClick} id="HOME">HOME</span>
        </Link>
        <Link to="/" className="menubar-item-link">
          <span className="menubar-item" onClick={handleLinkClick} id="SHOP">SHOP</span>
        </Link>
        <Link to="/" className="menubar-item-link">
          <span className="menubar-item" onClick={handleLinkClick} id="BLOG">BLOG</span>
        </Link>
        <Link to="/" className="menubar-item-link">
          <span className="menubar-item" onClick={handleLinkClick} id="ABOUT">ABOUT</span>
        </Link>
        <Link to="/" className="menubar-item-link">
          <span className="menubar-item" onClick={handleLinkClick} id="CONTACT">CONTACT</span>
        </Link>
      </div>
    </div>
  );
}
