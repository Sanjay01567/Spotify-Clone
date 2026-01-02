import React, { useContext } from 'react'
import { songsData } from '../assets/assets'
import { PlayerContext } from '../context/PlayerContext'


const Songsdata = (props) => {

   const {playwithid} = useContext(PlayerContext);
  return(
    <div onClick={()=>playwithid(props.id)}className='max-w-[200px] min-h-[100px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]'>
        <img className='rounded min-w-[170px] max-h-[190px] ' src={props.image}/>
        <p className='font-bold mt-2 mb-1'>{props.name}</p>
        <p className='text-slate-200 text-sm'>{props.desc}</p>
    </div>
  )
}
export default Songsdata