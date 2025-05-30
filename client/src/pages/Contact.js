import React from 'react'
import PageHeadBanner from '../components/Banner/PageHeadBanner'
import backgroundImage from '../assets/banner/contact.png'

export default function Contact() {
  return (
    <div>
      <PageHeadBanner backgroundImage={backgroundImage} headerTitle="#let's_talk" headerSubTitle="Looking for assistance, we are here to help!" />
    </div>
  )
}
