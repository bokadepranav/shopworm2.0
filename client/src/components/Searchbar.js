import React from "react";

export default function Searchbar() {
  return (
    <div className="search-bar-wrapper">
      <input
        type="text"
        className="search-bar-input text color-black text-font"
        placeholder="Search for products, categories, brand, etc."
      />
      <button className="search-bar-btn background-color-white">
        <i className="fa-solid fa-magnifying-glass search-bar-icon color-blue" />
      </button>
    </div>
  );
}
