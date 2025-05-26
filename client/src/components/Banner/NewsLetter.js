import React from "react";
import backgroundImage from "../../assets/banner/b14.png";

export default function NewsLetter() {
  return (
    <div
      className="news-letter-wrapper"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="row">
        <div className="col-md-7 news-letter-left-container">
          <span className="text-font heading-3 bold color-white my-1">
            Sign Up for New Letters
          </span>
          <span className="text-font heading-6 bold color-light-grey my-1">
            Get email updates for our latest shop and{" "}
            <span className="text-font heading-6 color-yellow">
              special offers.
            </span>
          </span>
        </div>
        <div className="col-md-5 news-letter-right-container">
          <input
            type="text"
            placeholder="Your Email Address"
            className="text-font text color-grey news-letter-input"
          />
          <button className="btn btn-primary text-font bold text color-white news-letter-btn">Sign Up</button>
        </div>
      </div>
    </div>
  );
}
