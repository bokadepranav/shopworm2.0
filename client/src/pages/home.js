import React from "react";
import heroBg from "../assets/catalog/catalog-slider-1.jpg";
import buttonBg from "../assets/button.png";
import CategoryBanner from "../components/CategoryBanner";

import categoryBanner1 from '../assets/catalog/catalog-banner-1.jpg';
import categoryBanner2 from '../assets/catalog/catalog-banner-2.jpg';
import categoryBanner3 from '../assets/catalog/catalog-banner-3.jpg';
import HeadingDescription from "../components/HeadingDescription";
import ProductCard from "../components/ProductCard";

export default function Home() {
  return (
    <>
      {/* hero banner */}
      <div
        className="hero-banner-wrapper"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <span className="heading-4 bold mb-3 color-black">Festive-feast</span>
        <span className="color-black text-font hero-banner-heading">
          Super value deals
        </span>
        <span className="mb-3 color-blue text-font hero-banner-heading">
          On all products
        </span>
        <span className="heading-5 color-grey text-font mb-3">
          Save more with coupons & upto 70% off!
        </span>
        <button
          className="hero-banner-btn heading-5 bold color-blue"
          style={{ backgroundImage: `url(${buttonBg})` }}
        >
          Shop now
        </button>
      </div>

      {/* category banners */}
      <div className="home-category-banner-wrapper">
        <CategoryBanner backgroundImage={`url(${categoryBanner1})`} categoryText={"WHITE SNEAKERS"} categoryDiscount={30} categoryDescription={"Men Fashionable Shoes"}/>
        <CategoryBanner backgroundImage={`url(${categoryBanner2})`} categoryText={"WOMEN'S FASHION"} categoryDiscount={65} categoryDescription={"Shoes & Backpacks"}/>
        <CategoryBanner backgroundImage={`url(${categoryBanner3})`} categoryText={"TRENDY GLASSES"} categoryDiscount={50} categoryDescription={"Fashionable Glasses"}/>
      </div>

      {/* new arrivals section */}
      <HeadingDescription heading={"New Arrivals"} description={"Summer Collection New Modern Design"} />

      {/* new arrivals products */}
      <ProductCard />
    </>
  );
}
