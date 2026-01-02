import React, { useEffect, useRef } from 'react'
import Displayhome from './Displayhome'
import { Route,Routes, useLocation } from 'react-router-dom'
import DisplayAlbum from './DisplayAlbums'
import { albumsData } from '../assets/assets'

function Display () {
  const displays = useRef()
  const loc = useLocation()
  const isAlbums = loc.pathname.includes("Albums");
  const albumid = isAlbums?loc.pathname.slice(-1):"";
  const bgclr = albumsData[Number(albumid)].bgColor;
  console.log(bgclr);
 
  useEffect(()=>{
    if(isAlbums)
    {
      displays.current.style.background = `linear-gradient(${bgclr},#121212)`;
    }
    else{
      displays.current.style.background = "#121212";
    }
  })
  return(
    <div ref={displays} className='w-[100] m-2 px-6 pt-4 rounded bg-black text-white overflow-auto lg-[75%] lg:ml-0'>
         <Routes>
            <Route path='/' element={<Displayhome/>}></Route>
            <Route path='/Albums/:id' element={<DisplayAlbum/>}></Route>
         </Routes>
    </div>
  )
}
export default Display
