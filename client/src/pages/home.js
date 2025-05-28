import React from "react";
import heroBg from "../assets/catalog/catalog-slider-1.jpg";
import buttonBg from "../assets/button.png";
import SmallBanner from "../components/Banner/SmallBanner";

import categoryBanner1 from "../assets/catalog/catalog-banner-1.jpg";
import categoryBanner2 from "../assets/catalog/catalog-banner-2.jpg";
import categoryBanner3 from "../assets/catalog/catalog-banner-3.jpg";

import medBannerImg1 from '../assets/banner/b17.jpg'
import medBannerImg2 from '../assets/banner/1.jpg'

import HeadingDescription from "../components/HeadingDescription";
import ProductGroup from "../components/ProductGroup";
import FullBanner from "../components/Banner/FullBanner";
import MediumBanner from "../components/Banner/MediumBanner";
import NewsLetter from "../components/Banner/NewsLetter";

export default function Home(props) {

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
        <SmallBanner
          backgroundImage={`url(${categoryBanner1})`}
          categoryText={"WHITE SNEAKERS"}
          categoryDiscount={30}
          categoryDescription={"Men Fashionable Shoes"}
        />
        <SmallBanner
          backgroundImage={`url(${categoryBanner2})`}
          categoryText={"WOMEN'S FASHION"}
          categoryDiscount={65}
          categoryDescription={"Shoes & Backpacks"}
        />
        <SmallBanner
          backgroundImage={`url(${categoryBanner3})`}
          categoryText={"TRENDY GLASSES"}
          categoryDiscount={50}
          categoryDescription={"Fashionable Glasses"}
        />
      </div>

      {/* new arrivals section */}
      <HeadingDescription
        heading={"New Arrivals"}
        description={"Summer Collection New Modern Design"}
      />

      <ProductGroup products={props.data.products} length={12} />

      {/* offer banner */}
      <FullBanner />

      {/* featured products section */}
      <HeadingDescription
        heading={"Featured Products"}
        description={"Summer Collection New Modern Design"}
      />

      <ProductGroup products={props.data.products} length={8} />

      {/* medium banner section */}
      <div className="medium-banner-section">
        <MediumBanner bannerTag={"crazy deals"} bannerTitle={"buy 1 get 1 free"} bannerDesc={"The best classic dress is on sale at cara"} bannerImg={medBannerImg1} />
        <MediumBanner bannerTag={"spring / summer"} bannerTitle={"upcoming season"} bannerDesc={"The best classic dreas is on sale at cara"} bannerImg={medBannerImg2} />
      </div>

      {/* news letter section */}
      <NewsLetter />
    </>
  );
}
