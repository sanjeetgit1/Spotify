import { createContext, useEffect, useRef, useState } from "react";
import { songsData } from "../assets/assets";

 export const PlayerContext = createContext();

const PlayerContextProvider=(props)=>{

    const audioRef= useRef();
    const seekBg = useRef();
    const seekBar = useRef();

const [track, setTrack] = useState(songsData[0]);
const [playStaus, setPlayStaus]= useState(false);
const [time, setTime]= useState({
    currentTime:{
        second:0,
        minute:0,
    }, 
    totalTime:{
        second:0,
        minute:0
    }
})
    

    const play=()=>{
        audioRef.current.play();
        setPlayStaus(true)
    }

    const pause=()=>{
        audioRef.current.pause();
        setPlayStaus(false);

    }

   
    
    const contextValue={
        audioRef,
        seekBar,
        seekBg,
        track,
        setTrack,
        playStaus, setPlayStaus,
        time, setTime,
        play,pause,




    }
    return(
        <PlayerContext.Provider value={contextValue}>
            {props.children}
        </PlayerContext.Provider>
    )
}

export default PlayerContextProvider;