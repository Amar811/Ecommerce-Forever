import React from 'react'
import { assets } from '../assets/assets'

const OurPolicy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-sm sm:text-sm md:text-base text-grap-700'>
     <div>
      <img className='w-12 m-auto mb-5' src={assets.exchange_icon} alt="" />
      <p className='font-semibold'>Easy Exchange Policy</p>
      <p className='text-gray-400'>We offer hassle free exchange policy</p>
     </div>  

     <div>
      <img className='w-12 m-auto mb-5' src={assets.quality_icon} alt="" />
      <p className='font-semibold'>7 Days Return Policy</p>
      <p className='text-gray-400'>We Provide 7 days free return policy</p>
     </div>  

     <div>
      <img className='w-12 m-auto mb-5' src={assets.support_img} alt="" />
      <p className='font-semibold'>Best customer support</p>
      <p className='text-gray-400'>we provide 24/7 customer support</p>
     </div>   
        
    </div>
  )
}

export default OurPolicy