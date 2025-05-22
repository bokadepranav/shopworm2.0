import React from 'react'

export default function SmallBanner(props) {
    console.log(props.backgroundImage)
  return (
    <div className='small-banner-wrapper background' style={{backgroundImage: props.backgroundImage}}> 
      <span className="text-font heading-6 bold color-blue mb-2">{props.categoryText}</span>
      <span className="text-font heading-4 bold color-black mb-2">{`Min ${props.categoryDiscount}% Off`}</span>
      <span className="text-small text-font color-black mb-3">{props.categoryDescription}</span>
      <button className="btn btn-primary heading-6 bold text-font">SHOP NOW</button>
    </div>
  )
}
