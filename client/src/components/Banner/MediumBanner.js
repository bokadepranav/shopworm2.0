import React from 'react'
import bannerImage from '../../assets/banner/b17.jpg'

export default function MediumBanner() {
  return (
    <div className='medium-banner-wrapper' style={{backgroundImage: `url(${bannerImage})`}}>
      <span className="text-font heading-6 color-white">crazy deals</span>
      <span className="text-font heading-5 bold color-white">buy 1 get 1 free</span>
      <span className="text text-font color-white">The best classic dress is on sale at cara</span>
    </div>
  )
}
