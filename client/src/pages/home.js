import React from 'react';
import heroBg from '../assets/catalog/catalog-slider-1.jpg';
import buttonBg from '../assets/button.png'

export default function Home() {
  return (
    <>
      <div className="hero-banner-wrapper" style={{backgroundImage: `url(${heroBg})`}}>
        <span className="heading-4 bold mb-3 color-black">Festive-feast</span>
        <span className="color-black text-font hero-banner-heading">Super value deals</span>
        <span className="mb-3 color-blue text-font hero-banner-heading">On all products</span>
        <span className="heading-5 color-grey text-font mb-3">Save more with coupons & upto 70% off!</span>
        <button className="hero-banner-btn heading-5 bold color-blue" style={{backgroundImage: `url(${buttonBg})`}}>Shop now</button>
      </div>
    </>
  )
}
