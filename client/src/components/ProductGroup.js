import React from "react";
import ProductCard from "./ProductCard";

export default function ProductGroup(props) {
  return (
    <div className="product-group-wrapper">
      <div className="product-group-row row">
        {props.products.slice(0, props.length).map((item, index) => {
            return (
          <div className="col-md-3 product-group-col" key={index}>
            <ProductCard
              brand={item.brand}
              title={item.name}
              rating={item.star_rating}
              priceCurrency={item.price_currency}
              price={item.price}
              imgPath={item.imgPath}
            />
          </div>);
        })}
      </div>
    </div>
  );
}
