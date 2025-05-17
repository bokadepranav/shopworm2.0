import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Menubar() {
  const [activePage, setActivePage] = useState("HOME");

  const handleLinkClick = (currPage) => {
    setActivePage(currPage);
  };

  const menuItems = ["HOME", "SHOP", "BLOG", "ABOUT", "CONTACT"];

  return (
    <div className="menubar-container">
      <div className="menubar-item-wrapper">
        {menuItems.map((item) => (
          <Link to={`/${item.toLowerCase()}`} className="menubar-item-link" key={item}>
            <span
              className={`menubar-item ${activePage === item ? "active" : ""}`}
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
