import React from 'react'
import ProfessionalWashing from './ProfessionalWashing/ProfessionalWashing'
import FeatureCard from '../FeatureCard/FeatureCard'
import Featured from '../Featured/Featured'
import DryCleaning from './DryCleaning/DryCleaning'
import HomeLanding from './HomeLanding/HomeLanding'

export default function Home() {
  return (<>



<div className='bg-black'>
<HomeLanding></HomeLanding>
<ProfessionalWashing></ProfessionalWashing>
<Featured></Featured>
<DryCleaning></DryCleaning>

</div>

  
  
  
  
  </>
  
  )
}
