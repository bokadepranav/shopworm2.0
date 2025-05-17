import React from "react";
import Searchbar from "./Searchbar";

export default function Menubar() {
  return (
    <section>
      <div className="menubar-wrapper background-color-blue">
        <span className="menubar-logo heading-1 color-white">Shopworm.</span>
        <Searchbar />
        <div className="menubar-login-wrapper">
          <button className="menubar-login-user-btn background-color-blue"><i className="fa-solid fa-user menubar-login-user-btn-icon color-white"></i></button>
          <div className="menubar-login-user-wrapper text-font">
            <span className="menubar-login-user-greetings heading-6 color-white">Hello,</span>
            <span className="menubar-login-user-name heading-5 bold color-white">SignUp</span>
          </div>
        </div>
        <div className="menubar-menu-btn-wrapper">
          <button className="menubar-menu-btn background-color-white"><i className="fa-solid fa-heart menubar-menu-btn-icon color-blue"></i></button>
          <button className="menubar-menu-btn background-color-white"><i className="fa-solid fa-cart-shopping menubar-menu-btn-icon color-blue"></i></button>
        </div>
      </div>
    </section>
  );
}
