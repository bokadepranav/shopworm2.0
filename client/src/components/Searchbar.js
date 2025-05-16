import React from "react";

export default function Searchbar() {
  return (
    <div className="search-bar-wrapper">
      <input
        type="text"
        className="search-bar-input"
        placeholder="Search for products, categories, brand, etc."
      />
      <button className="search-bar-btn">
        <i className="fa-solid fa-magnifying-glass search-bar-icon" />
      </button>
    </div>
  );
}
