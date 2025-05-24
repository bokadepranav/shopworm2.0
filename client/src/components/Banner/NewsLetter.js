import React from 'react'
import backgroundImage from '../../assets/banner/b14.png'

export default function NewsLetter() {
  return (
    <div className='news-letter-wrapper' style={{backgroundImage: `url(${backgroundImage})`}}>
      <div className="row">
        <div className="col-md-7">
            <span className="text-font heading-3 bold color-white">Sign Up for New Letters</span>
        </div>
        <div className="col-md-5"></div>
      </div>
    </div>
  )
}
