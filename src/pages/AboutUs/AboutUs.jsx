import React from 'react'
import Header from '../../components/Header/Header'
import HeroSection from '../../components/HeroSection/HeroSection'
import Testimonial from '../../components/Testimonial/Testimonial'
import Footer from '../../components/Footer/Footer'

function AboutUs() {
  return (
    <div className='about-us'>
        <Header></Header>
        <HeroSection text={"About us"}></HeroSection>
        <Testimonial></Testimonial>
        <Footer></Footer>
    </div>
  )
}

export default AboutUs