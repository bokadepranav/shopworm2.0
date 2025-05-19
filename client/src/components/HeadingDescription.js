import React from 'react'

export default function HeadingDescription(props) {
  return (
    <div className='heading-description-wrapper'>
      <span className="heading-1 text-font bolder color-black text-center mb-3">{props.heading}</span>
      <span className="heading-6 text-font color-grey text-center">{props.description}</span>
    </div>
  )
}
