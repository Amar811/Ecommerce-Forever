import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import ProductItem from './ProductItem';

const BestSeller = () => {
   const { products } = useContext(ShopContext);
   console.log(products)
   const [bestSeller, setBestSeller] = useState([]); // Change to an empty array instead of object
   console.log(bestSeller); // Log the bestSeller array

   useEffect(() => {  
    setBestSeller(products.slice(0,5));
    }, []); 
  return (
    <div className='my-10'>
        <div className='text-center text-3xl py-8'>
         <Title text1={'BEST'} text2={'SELLER'} />
         <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'> {/* Fixed typo here */}
         It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
         </p>
      </div>

      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
        {/* Check if bestSeller is populated */}
        {bestSeller.length > 0 ? (
          bestSeller.map((item, index) => (
            <ProductItem key={index} _id={item._id} name={item.name} image={item.image} price={item.price} />
          ))
        ) : (
          <p>No best sellers available.</p> // Provide fallback message if no data
        )}
      </div>
    </div>
  );
}

export default BestSeller;
