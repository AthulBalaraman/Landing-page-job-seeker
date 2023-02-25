import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Hero from '../components/hero/Hero'
import Categories from '../components/categories/Categories'
import Resume from '../components/resume/Resume'
import Jobsection from '../components/jobsection/Jobsection'
import HowItWorks from '../components/howItWorks/HowItWorks'
import Slider from '../components/slider/Slider'
import Footer from '../components/footer/Footer'
const LandingPage = () => {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Categories/>
      <Resume/>
      <Jobsection/> 
      <HowItWorks/>
      <Slider/>
      <Footer/>
    </>
  )
}

export default LandingPage
