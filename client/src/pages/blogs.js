import React from 'react'
import PageHeadBanner from '../components/Banner/PageHeadBanner'
import NewsLetter from '../components/Banner/NewsLetter'
import backgroundImage from '../assets/blog/banner.jpg'

export default function Blogs() {
  return (
    <div>

      {/* page header banner */}
      <PageHeadBanner backgroundImage={backgroundImage} headerTitle="#readmore" headerSubTitle="Read all case studies about our products!" />

      {/* news letter */}
      <NewsLetter />

    </div>
  )
}
