import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {const [activePage, setActivePage] = useState("HOME");

  const handleLinkClick = (currPage) => {
    setActivePage(currPage);
  };

  const menuItems = ["HOME", "SHOP", "BLOG", "ABOUT", "CONTACT"];

  return (
    <div className="navbar-container">
      <div className="navbar-item-wrapper">
        {menuItems.map((item) => (
          <Link to={`/${item.toLowerCase()}`} className="navbar-item-link" key={item}>
            <span
              className={`navbar-item text bold color-black text-font ${activePage === item ? "active" : ""}`}
              onClick={() => handleLinkClick(item)}
              id={item}
            >
              {item}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
  
}
