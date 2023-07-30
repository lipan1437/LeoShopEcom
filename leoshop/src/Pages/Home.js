import React from 'react'
import HeroSection from '../components/HeroSection'
import Services from '../components/Services'
import Truested from '../components/Truested'


const Home = () => {

  const data = {
    name : "Leo Shop",
  }

  return (
    <>
     <HeroSection myData = {data}/>
     <Services/>
     <Truested/>
     </>
  )
}


export default Home
