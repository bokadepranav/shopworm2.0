import React from "react";
import Searchbar from "./Searchbar";

export default function Menubar() {
  return (
    <section>
      <div className="menubar-wrapper">
        <span className="menubar-logo">Shopworm.</span>
        <Searchbar />
        <div className="menubar-login-wrapper">
          <button className="menubar-login-user-btn"><i className="fa-solid fa-user menubar-login-user-btn-icon"></i></button>
          <div className="menubar-login-user-wrapper">
            <span className="menubar-login-user-greetings">Hello,</span>
            <span className="menubar-login-user-name">SignUp</span>
          </div>
        </div>
        <div className="menubar-menu-btn-wrapper">
          <button className="menubar-menu-btn"><i className="fa-solid fa-heart menubar-menu-btn-icon"></i></button>
          <button className="menubar-menu-btn"><i className="fa-solid fa-cart-shopping menubar-menu-btn-icon"></i></button>
        </div>
      </div>
    </section>
  );
}
