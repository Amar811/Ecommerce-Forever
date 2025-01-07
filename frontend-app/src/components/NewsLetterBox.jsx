import React from 'react'

const NewsLetterBox = () => {
    const onSubmitHandler=(event)=>{
      event.preventDefault();
    }
  return (
    <div className='text-center'>
       <p className='text-2xl font-medium text-gray-800'>Subscribe now & get 20% off</p> 
       <p className='text-gray-400 mt-3'>
       There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.

       </p>
       <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
        <input className='w-full sm:flex-1 outline-none' type="email" placeholder='Enter your email' required/>
        <button className='bg-black text-white text-xs px-10 py-4' type='submit'>
            SUBSCRIBE
        </button>
       </form>
    </div>
  )
}

export default NewsLetterBox