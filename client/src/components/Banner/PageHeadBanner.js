import React from 'react'
import bannerImage from '../../assets/banner/b1.jpg'

export default function PageHeadBanner(props) {
  return (
    <div className='page-head-banner-wrapper' style={{backgroundImage: `url(${bannerImage})`}}>
      <span className="text-font heading-1 bold color-white my-1">{props.headerTitle}</span>
      <span className="text-font text color-white my-1">{props.headerSubTitle}</span>
    </div>
  )
}
