import React from "react";
import { Link } from "react-router-dom";
import appStore from "../assets/pay/app.jpg";
import playStore from "../assets/pay/play.jpg";
import pay from "../assets/pay/pay.png";

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="row footer-row">
        <div className="col-md-4 footer-col">
          <Link to="/home" className="mb-3">
            <span className="footer-logo heading-2 color-black">Shopworm.</span>
          </Link>
          <span className="footer-subheading heading-6 bold mb-2 text-font">
            Contact
          </span>
          <div className="text-font">
            <span className="text bold color-grey">Address: </span>
            <span className="text color-grey">
              562 Wallington Road , San Fransisco
            </span>
          </div>
          <div className="text-font">
            <span className="text bold color-grey">Phone: </span>
            <span className="text color-grey">+91 9999999999</span>
          </div>
          <div className="text-font">
            <span className="text bold color-grey">Hours: </span>
            <span className="text color-grey">10:00 - 18:00 Mon - Sat</span>
          </div>
          <span className="text bold color-black my-2 text-font">
            follow us
          </span>
          <div className="footer-social-media-handle-wrapper">
            <i class="fa-brands fa-facebook-f color-black"></i>
            <i class="fa-brands fa-instagram color-black"></i>
            <i class="fa-brands fa-twitter color-black"></i>
            <i class="fa-brands fa-youtube color-black"></i>
          </div>
        </div>
        <div className="col-md-2 footer-col">
          <span className="heading-6 text-font bold color-black mb-3">
            About
          </span>
          <span className="text color-black text-font mb-1">About Us</span>
          <span className="text color-black text-font mb-1">
            Delivery Information
          </span>
          <span className="text color-black text-font mb-1">
            Privacy Policy
          </span>
          <span className="text color-black text-font mb-1">
            Terms & Conditions
          </span>
          <span className="text color-black text-font mb-1">Contact Us</span>
        </div>
        <div className="col-md-2 footer-col">
          <span className="heading-6 text-font bold color-black mb-3">
            My Account
          </span>
          <span className="text color-black text-font mb-1">Sign In</span>
          <span className="text color-black text-font mb-1">View Cart</span>
          <span className="text color-black text-font mb-1">My Wishlist</span>
          <span className="text color-black text-font mb-1">
            Track My Order
          </span>
          <span className="text color-black text-font mb-1">Help</span>
        </div>
        <div className="col-md-3 footer-col">
          <span className="heading-6 bold color-black text-font mb-3">
            Install App
          </span>
          <span className="text color-black text-font mb-3">
            From Apple Store of Google Play
          </span>
          <div className="footer-social-media-handle-wrapper">
            <img
              src={appStore}
              alt="App Store"
              className="footer-install-app-icon"
            />
            <img
              src={playStore}
              alt="Play Store"
              className="footer-install-app-icon"
            />
          </div>
          <span className="text color-black text-font my-3">
            Secured Payment Gateways
          </span>
          <img
            src={pay}
            alt="Payment Gateway"
            className="footer-payment-icon"
          />
        </div>
      </div>
      <div className="footer-copyright-wrapper mt-3">
        <span className="text text-font color-black footer-copyright-text">
          © 2025, Developed by Pranav/Mabi-Tech
        </span>
      </div>
    </div>
  );
}
