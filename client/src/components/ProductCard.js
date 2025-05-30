import React from "react";
import StarRating from "./StarRating";

export default function ProductCard(props) {
  const currency_map = {
    "USD": "$"
  }
  return (
    <div className="product-card-wrapper">
      <img
        src={props.imgPath}
        alt="product"
        className="product-card-image mb-3"
      />
      <span className="text-font text color-grey mb-1">{props.brand}</span>
      <span className="ellepsis-text heading-6 bolder color-black text-font mb-1">
        {props.title}
      </span>
      <div className="product-card-details-wrapper">
        <div className="product-card-details">
          <StarRating rating={props.rating} />
          <span className="product-card-price heading-6 text-font color-blue bolder">
            {currency_map[props.priceCurrency]}{props.price}
          </span>
        </div>
        <i class="fa-solid fa-cart-shopping product-card-cart-icon text-center color-blue background-color-light-blue"></i>
      </div>
    </div>
  );
}
