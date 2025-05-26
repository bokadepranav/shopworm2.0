import React from 'react'
import bannerImage from '../../assets/banner/b17.jpg'

export default function MediumBanner(props) {
  return (
    <div className='medium-banner-wrapper' style={{backgroundImage: `url(${props.bannerImg})`}}>
      <span className="text-font heading-4 color-white my-1">{props.bannerTag}</span>
      <span className="text-font heading-2 bolder color-white my-1">{props.bannerTitle}</span>
      <span className="heading-6 text-font color-white my-1">{props.bannerDescription}</span>
      <button className="btn border-color-white background-color-transparent color-white my-2 text-font text bold">Learn More</button>
    </div>
  )
}
