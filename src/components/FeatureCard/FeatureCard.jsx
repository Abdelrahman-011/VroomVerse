import React from 'react'
import { FaStar } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import snowflake from "../../assets/images/snowflake.png"
import avatar from "../../assets/images/avatar.png"
import windSun from "../../assets/images/wind-sun.png"
import wind from "../../assets/images/wind.png"

export default function FeatureCard({imgSrc,title,text}) {
  return (<>
  <div className='card text-white text-center bg-[#ffffff14] backdrop-blur-[1.5rem] rounded-xl px-4 border  py-10 flex flex-col gap-5'>
    <div className='w-[6rem] mx-auto '>
        <img className='w-full' src={imgSrc} alt="" />
    </div>
    <h3 className='text-[1.2rem] font-bold text-main'>{title}</h3>
    <p>{text}</p>
    <div className='flex items-center gap-1 justify-center'>
    <FaStar className='text-main w-5'/>
    <FaStar className='text-main w-5' />
    <FaStar className='text-main w-5' />
    <FaStar className='text-main w-5' />
    <CiStar className='text-main scale-150'/>

    </div>
    
  </div>
  
  </>

  )
}
