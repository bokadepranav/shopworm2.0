import React from 'react'
import bannerImage from '../../assets/banner/b17.jpg'

export default function MediumBanner() {
  return (
    <div className='medium-banner-wrapper' style={{backgroundImage: `url(${bannerImage})`}}>
      <span className="text-font heading-4 color-white my-1">crazy deals</span>
      <span className="text-font heading-2 bolder color-white my-1">buy 1 get 1 free</span>
      <span className="heading-6 text-font color-white my-1">The best classic dress is on sale at cara</span>
      <button className="btn border-color-white background-color-transparent color-white my-2 text-font text bold">Learn More</button>
    </div>
  )
}
