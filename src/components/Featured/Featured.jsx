import React from 'react'
import FeatureCard from '../FeatureCard/FeatureCard'

import snowflake from "../../assets/images/snowflake.png"
import avatar from "../../assets/images/avatar.png"
import windSun from "../../assets/images/wind-sun.png"
import wind from "../../assets/images/wind.png"


export default function Featured() {
  return (<>

  <section className='bg-black'>
    <div className='w-[85%] mx-auto mx-md:w-[95%] py-[5rem] px-3 grid gap-6 grid-cols-4 max-sm:grid-cols-1 max-md:grid-cols-2 max-lg:grid-cols-3' >
      
        <FeatureCard imgSrc={snowflake} title= "Safety Materials" text="We use eco-friendly, and materials to protect your car and environment."/>
        <FeatureCard imgSrc={avatar} title= "Contactless Washing" text="Advanced technology ensures spotless cleaning without scratching."/>
        <FeatureCard imgSrc={windSun} title= "Modern Equipment" text="Our state-of-the-art machines guarantee efficient cleaning results."/>
        <FeatureCard imgSrc={wind} title= "Extensive Cleanings" text="From carpets to crevices, every inch of your car gets attention."/>
        

    </div>


  </section>
  
  </>

  )
}
