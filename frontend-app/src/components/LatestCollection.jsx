import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';

const LatestCollection = () => {
   const {products} =useContext(ShopContext);
  
  return (
    <div className='my-10'>
        <div className='text-center py-8 text-3xl'>
          <Title text1={'LATEST'} text2={'COLLECTIONS'}/>
          <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
          </p>
        </div>
        
    </div>
  )
}

export default LatestCollection