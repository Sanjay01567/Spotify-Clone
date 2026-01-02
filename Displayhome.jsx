import React from 'react'
import Navbar from './navbar'
import { albumsData, songsData } from '../assets/assets'
import Albumsitems from './Albumsitems'
import Songsdata from './Songsdata'


const Displayhome = () => {
  return(
   <>
   <Navbar></Navbar>
   <div className='mb-4 absolute top-30'>
    <h1 className='my-5 font-bold text-2xl '>Your Top Playlist</h1>
    <div className='flex overflow-auto'>
       {albumsData.map((item,index)=>
        (<Albumsitems key={index} 
        name={item.name}
         desc={item.desc}
         id={item.id} 
         image={item.image}/>))}
    </div>
   
   </div>
    <div className='mb-4 absolute top-115'>
    <h1 className='my-5 font-bold text-2xl '>Recently Played</h1>
    <div className='flex overflow-auto'>
     {songsData.map((item,index)=>
     (<Songsdata key={index} 
     name={item.name} 
     desc={item.desc} 
     id={item.id}
      image={item.image}/>))} 
    </div>
   
   </div>
   </>
  )
}
export default Displayhome