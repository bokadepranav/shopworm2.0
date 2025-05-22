import React from 'react'
import bannerImage from '../../assets/banner/b2.jpg'

export default function FullBanner() {
  return (
    <div className='full-banner-wrapper' style={{backgroundImage: `url(${bannerImage})`}}>
      <span className="text-font bold heading-4 color-white my-2">Summer Collections</span>
        <span className="text-font heading-2 bolder color-white my-2">Up to <span className="color-red">70% off</span> - All T-Shirts & Accessories</span>
        <button className="btn btn-primary background-color-white color-black border-color-white text-font heading-6 bold my-2">Explore More</button>
    </div>
  )
}
