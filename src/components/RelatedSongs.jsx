import { useGetTopChartsQuery } from "../redux/services/shazamCore";
import { useDispatch,useSelector } from "react-redux";
import PlayPause from './PlayPause';
import {Link} from 'react-router-dom';
import { playPause } from '../redux/features/playerSlice';
import { setActiveSong } from '../redux/features/playerSlice';
let SongItem=({song,i,handlePauseClick,handlePlayClick,isPlaying,activeSong})=>{
  return (
    <div className="flex flex-row w-full p-1 bg-white/5 backdrop-blur-sm cursor-pointer justify-between items-center rounded-lg m-1">
      <div className="flex items-center">
    <img src={song?.images?.coverart} className="w-20 h-20 m-3 rounded-lg"/>
    <div className='mt-4 flex flex-col text-white'>
    <p className='truncate font-bold text-lg text-2xl'>
      <Link to={`/songs/${song?.key}`}>
      {song?.title}
      </Link>
    </p>
    <p className='truncate text-sm'>
    <Link to={`/artists/${(song&&song.artists)?song.artists[0].adamid:''}`}>
    {song?.subtitle}
    </Link>
    </p>
   </div>
   </div>
   <PlayPause 
     song={song}
     handlePause={handlePauseClick}
     handlePlay={()=>handlePlayClick(song,i)}
     isPlaying={isPlaying}
     activeSong={activeSong}
    />
    </div>
  );
}
const RelatedSongs = ({songs}) => {
  let dispatch=useDispatch();
  const {activeSong,isPlaying}=useSelector((state)=>state.player);
  const {data,isFetching,error}=useGetTopChartsQuery();
  console.log(songs);
  let handlePauseClick=()=>{
  dispatch(playPause(false))
  }
  let handlePlayClick=(song,i)=>{
    dispatch(setActiveSong({song,data,i}));
    dispatch(playPause(true));
  }
   
  return(
  <div className="flex flex-col text-white w-full pr-20 mt-10">
   <h2 className="font-bold text-2xl m-2">Related Songs:</h2>
   <div>
    {songs?.map((song,i)=><SongItem song={song} i={i} handlePauseClick={handlePauseClick} handlePlayClick={handlePlayClick} isPlaying={isPlaying} activeSong={activeSong} />)}
   </div>
  </div>
  );
}

export default RelatedSongs;
