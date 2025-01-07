import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets'; // Ensure the import path for assets is correct
import { useLocation } from 'react-router-dom';

const SearchBar = () => {
  // Destructure correctly from context (use 'showSearch' instead of 'showSearh')
  const { search, setSearch, showSearch, setShowSearch } = useContext(ShopContext);
  const [visible,setVisible]=useState(false);
  const location = useLocation();


  useEffect(()=>{
   if(location.pathname.includes('collection')){
      setVisible(true);
   }
   else{
    setVisible(false);
   }

  },[location])


  return showSearch && visible ? (
    <div className='border-t border-b bg-gray-50 text-center'>
      <div className='inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2'>
        {/* Corrected the event handler to pass 'e' and get the value */}
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)} // Passing the event and using e.target.value
          className='flex-1 outline-none bg-inherit text-sm '
          type='text'
          placeholder='Search'
        />
        <img className='w-4' src={assets.search_icon} alt="Search Icon" />
      </div>
      {/* Clicking on the cross icon will hide the search bar */}
      <img
        onClick={() => setShowSearch(false)}
        className='inline w-3 cursor-pointer'
        src={assets.cross_icon} alt="Close Icon"
      />
    </div>
  ) : null;
}

export default SearchBar;
