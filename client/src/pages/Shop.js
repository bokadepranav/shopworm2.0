import React from 'react'
import PageHeadBanner from '../components/Banner/PageHeadBanner'
import HeadingDescription from '../components/HeadingDescription'
import ProductGroup from '../components/ProductGroup'
import NewsLetter from '../components/Banner/NewsLetter'

export default function Shop(props) {
  return (
    <div>
      {/* page header banner */}
      <PageHeadBanner headerTitle="#stayhome" headerSubTitle="Save more with coupons & upto 70% off!" backgroundImage="../assets/banner/b1.jpg" />
    
      {/* shop product */}
      <HeadingDescription heading="New Arrivals" description="Get upto 70% off on all fashion brands!" />

      <ProductGroup products={props.data.products} length={16} />
    
      {/* news letter */}
      <NewsLetter />
    </div>
  )
}
