import React from 'react'
import PageHeadBanner from '../components/Banner/PageHeadBanner'
import NewsLetter from '../components/Banner/NewsLetter'

export default function Blogs() {
  return (
    <div>

      {/* page header banner */}
      <PageHeadBanner backgroundImage="../assets/banner/b2.jpg" headerTitle="#readmore" headerSubTitle="Read all case studies about our products!" />

      {/* news letter */}
      <NewsLetter />

    </div>
  )
}
