import React from 'react'
import PageHeadBanner from '../components/Banner/PageHeadBanner'
import backgroundImage from '../assets/about/banner.png'

export default function About() {
  return (
    <div>
      <PageHeadBanner backgroundImage={backgroundImage} headerTitle="#knowUs" headerSubTitle="wanna know who we are?" />
    </div>
  )
}
