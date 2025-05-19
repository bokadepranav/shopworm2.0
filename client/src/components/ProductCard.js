import React from "react";
import productImage from "../assets/products/bags/3.jpg";
import StarRating from "./StarRating";

export default function ProductCard(props) {
  return (
    <div className="product-card-wrapper">
      <img
        src={productImage}
        alt="product"
        className="product-card-image mb-3"
      />
      <span className="text-font text color-grey mb-1">adidas</span>
      <span className="heading-6 bolder color-black text-font mb-1">
        Men's fashion T-shirt
      </span>
      <div className="product-card-details-wrapper">
        <div className="product-card-details">
          <StarRating rating={5} />
          <span className="product-card-price heading-6 text-font color-blue bolder">
            $78
          </span>
        </div>
        <i class="fa-solid fa-cart-shopping product-card-cart-icon text-center color-blue background-color-light-blue"></i>
      </div>
    </div>
  );
}
