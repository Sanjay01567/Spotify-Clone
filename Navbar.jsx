import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    const nav = useNavigate()
  return(
   <div className='w-full flex justify-between items-center font-semibold'>
    <div className='flex items-center gap-2'>
        <img onClick={()=>nav(-1)} className='w-8 bg-black p-2 rounded-2xl cursor-pointer' src={assets.arrow_left}/>
         <img onClick={()=>nav(1)}className='w-8 bg-black p-2 rounded-2xl cursor-pointer' src={assets.arrow_right}/>
    </div>
    <div className=' flex items-center justify-between px-6 py-4'>
        <p className='absolute top-4 right-50 bg-white text-black text-[15px] px-4 py-4 rounded-2xl hidden md:block cursor-pointer'>Explore Premium</p>
        <p className='bg-blue-400 text-white absolute top-4 right-19 py-4 px-4 rounded-2xl text-[15px] cursor-pointer'>Install App</p>
        <p className='bg-orange-500 absolute top-4 right-4 text-black w-12 h-12 rounded-full flex items-center justify-center cursor-pointer'>V</p>
    </div>
    <div className='flex  gap-2 mt-4 absolute right-314 top-16'>
        <p className='bg-white text-black px-4 py-1 rounded-2xl cursor-pointer'>All</p>
        <p className='bg-black px-4 py-1 rounded-2xl cursor-pointer'>Music</p>
        <p className='bg-black px-4 py-1 rounded-2xl cursor-pointer'>Podcasts</p>
    </div>
    

   </div>
  )
}
export default Navbar