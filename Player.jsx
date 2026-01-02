import React, { useContext } from 'react'
import { assets, songsData } from '../assets/assets'
import { PlayerContext } from '../context/PlayerContext'


const Player = ()  => {

    const {seekbar,seekbg,play,pause,playStatus,track,time,after,before,seekBGclick} = useContext(PlayerContext)
  return(
    <div className='h-[10%] bg-black flex justify-between items-center text-white px-4'>
        <div className='hidden lg:flex items-center gap-4'>
            <img className='w-12'src={track.image}></img>
            <div>
        <p>{track.name}</p>
        <p>{track.desc.slice(0,16)+"..."}</p>
        </div>
        </div>
        <div className='flex flex-col items-center gap-1 m-auto'>
            <div className='flex  gap-8'>
                <img className='w-6 cursor-pointer'src={assets.shuffle_icon}></img>
                <img onClick={before} className='w-6 cursor-pointer'src={assets.prev_icon}></img>
                {playStatus?(
                    <img onClick={pause} 
                    className='w-6 cursor-pointer'
                    src={assets.pause_icon}></img>
                ):
                (<img onClick={play} 
                className='w-6 cursor-pointer'
                src={assets.play_icon}></img>)
            
            }
                <img onClick={after} className='w-6 cursor-pointer'src={assets.next_icon}></img>
                <img className='w-6 cursor-pointer'src={assets.loop_icon}></img>
            </div>
            <div className='flex items-center gap-5'>
                <p>{time.currentTime.minute}:{time.currentTime.second}</p>
                <div ref={seekbg} onClick={seekBGclick} className='w-[70vw] max-w-[500px] bg-gray-300 rounded-full cursor-pointer' >
                    <hr ref={seekbar} className='h-1 border-none w-10 bg-green-800 rounded-full'></hr>
                </div>
                <p>{time.totalTime.minute}:{time.totalTime.second}</p>
            </div>
        </div>
        <div className='hidden lg:flex items-center gap-2 opacity-75'>
            
            <img  className='w-4' src={assets.mic_icon}></img>
            <img  className='w-4' src={assets.play_icon}></img>
            <img  className='w-4' src={assets.pause_icon}></img>
            <img  className='w-4' src={assets.queue_icon}></img>
            <img  className='w-4' src={assets.speaker_icon}></img>
            <img  className='w-4' src={assets.volume_icon}></img>
            <div className='bg-gray-300 rounded cursor-pointer '>
            <div className='w-25 bg-green-800 h-2 rounded border-none '></div>
            </div>
            <img  className='w-4' src={assets.mini_player_icon}></img>
            <img  className='w-4' src={assets.zoom_icon}></img>

        </div>
    </div>
    
  )
}

export default Player