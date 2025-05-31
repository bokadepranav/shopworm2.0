import React from 'react'

export default function FeatureCard(props) {
  return (
    <div className='feature-card-wrapper flex-col'>
      <img src={props.featureImage} alt={props.featureTitle} className='feature-card-image mb-1' />
      <span className="text-font text-small bold color-dark-aqua feature-card-text" style={{backgroundColor : props.featureBackgroundColor}}>{props.featureTitle}</span>
    </div>
  )
}
