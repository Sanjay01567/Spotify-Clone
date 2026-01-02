import React, { useContext } from "react";
import Navbar from "./navbar";
import { useParams } from "react-router-dom";
import { albumsData, assets, songsData } from "../assets/assets";
import { PlayerContext } from "../context/PlayerContext";


const DisplayAlbum = () => {
     
    const {id} = useParams();

    const albums = albumsData[id];

    const {playwithid} = useContext(PlayerContext);
    
    return (

      
       <>
       <Navbar/>
       <div className='mt-30 flex gap-10 flex-col md:flex-row '>
        <img className='w-60 rounded'src={albums.image}/>
        <div className="flex flex-col">
            <p>Playlist</p>
            <h2 className="text-4xl font-bold mb-4 md:text-6xl">
                {albums.name}
            </h2>
            <h4>{albums.desc}</h4>
            <p className="mt-2">
                <img className="inline-block w-5" src={assets.spotify_logo}/>
                <b>  Spotify Clone  </b> 
                <br></br>
                <br></br>
                <p > 33,56,095 likes </p> 
                <br></br>
                <b>50 Songs</b> | About 2hrs 35mins
                
            </p>
        </div>
       </div>
       <div className=" grid grid-cols-3 sm:grid-cols-4 gap-91 mt-10 mb-4 pl-2 text-[#a7a7a7]">
        <p><b className="mr-3">#</b>Title</p>
       <p className="">Album</p> 
       <p>Date Added</p>
       <img className=" w-6  " src={assets.clock_icon}></img>
       </div>
       <hr></hr>
       {
          songsData.map((item,index) => (
            <div onClick={()=>playwithid(item.id)} key={index} className="grid grid-cols-3 sm:grid-cols-4 gap-3 p-2 items-center text-[#a7a7a7 hover:bg-[#ffffff2b] cursor-pointer">
            <p className="text-white">
                <b className="mr-4 text-[#a7a7a7]">{index+1}</b>
                <img className=" inline w-10 mr-5 " src={item.image}/>
                {item.name}
            </p>
            <p className="pl-20 text-[15px]">{albums.name}</p>
            <p className="pl-47 text-[15px]">3 days ago</p>
            <p className="pl-67 text-[15px] ">{item.duration}</p>
            
            
            </div>
          ))
       }
       </>
    )
        
}
 export default DisplayAlbum