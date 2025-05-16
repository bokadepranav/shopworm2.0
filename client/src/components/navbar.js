import React from "react";
import Searchbar from "./Searchbar";

export default function Navbar() {
  return (
    <section>
      <div className="navbar-wrapper">
        <span className="navbar-logo">Shopworm.</span>
        <Searchbar />
        <div className="navbar-login-wrapper">
          <button className="navbar-login-user-btn"><i className="fa-solid fa-user navbar-login-user-btn-icon"></i></button>
          <div className="navbar-login-user-wrapper">
            <span className="navbar-login-user-greetings">Hello,</span>
            <span className="navbar-login-user-name">SignUp</span>
          </div>
        </div>
        <div className="navbar-menu-btn-wrapper">
          <button className="navbar-menu-btn"><i class="fa-solid fa-heart navbar-menu-btn-icon"></i></button>
          <button className="navbar-menu-btn"><i class="fa-solid fa-cart-shopping navbar-menu-btn-icon"></i></button>
        </div>
      </div>
    </section>
  );
}
