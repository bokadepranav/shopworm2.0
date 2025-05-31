import React from 'react'
import PageHeadBanner from '../components/Banner/PageHeadBanner'
import backgroundImage from '../assets/about/banner.png'
import FeatureCard from '../components/FeatureCard'
import featureImage1 from '../assets/features/f1.png'
import featureImage2 from '../assets/features/f2.png'
import featureImage3 from '../assets/features/f3.png'
import featureImage4 from '../assets/features/f4.png'
import featureImage5 from '../assets/features/f5.png'
import featureImage6 from '../assets/features/f6.png'

export default function About() {
  return (
    <div>
      <PageHeadBanner backgroundImage={backgroundImage} headerTitle="#knowUs" headerSubTitle="wanna know who we are?" />

      <div className="feature-group-wrapper">
        <FeatureCard featureImage={featureImage1} featureTitle="Free Shipping" featureBackgroundColor="var(--prop-sky-blue)" />
        <FeatureCard featureImage={featureImage2} featureTitle="Online Order" featureBackgroundColor="var(--prop-pink)" />
        <FeatureCard featureImage={featureImage3} featureTitle="Save Money" featureBackgroundColor="var(--prop-green)" />
        <FeatureCard featureImage={featureImage4} featureTitle="Promotions" featureBackgroundColor="var(--prop-violet)" />
        <FeatureCard featureImage={featureImage5} featureTitle="Happy Sell" featureBackgroundColor="var(--prop-purple)" />
        <FeatureCard featureImage={featureImage6} featureTitle="24/7 Support" featureBackgroundColor="var(--prop-peach)" />
      </div>
    </div>
  )
}
