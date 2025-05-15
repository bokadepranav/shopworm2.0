import React from "react";
import Searchbar from "./Searchbar";

export default function Navbar() {
  return (
    <section>
      <div className="navbar-wrapper">
        <span className="navbar-logo">Shopworm.</span>
        <Searchbar />
      </div>
    </section>
  );
}
