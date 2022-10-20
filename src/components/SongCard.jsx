import PlayPause from './PlayPause';
import {Link} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { playPause } from '../redux/features/playerSlice';
import { setActiveSong } from '../redux/features/playerSlice';
const SongCard = ({song,i,data,isPlaying,activeSong}) => {
  const dispatch=useDispatch();
  let handlePauseClick=()=>{
  dispatch(playPause(false))
  }
  let handlePlayClick=()=>{
    dispatch(setActiveSong({song,data,i}));
    dispatch(playPause(true));
  }
  if(data)console.log(data);
  return(
  <div className="flex flex-col w-[250px] p-5 bg-white/5 backdrop-blur-sm cursor-pointer rounded-lg m-1">
   <div className='relative w-full h-56 group'>
    <img src={song?.images?.coverart}/>
    <div className='absolute inset-0 flex justify-center items-center'>
    <PlayPause 
     song={song}
     handlePause={handlePauseClick}
     handlePlay={handlePlayClick}
     isPlaying={isPlaying}
     activeSong={activeSong}
    />
    </div>
   </div>
   <div className='mt-4 flex flex-col text-white'>
    <p className='truncate font-bold text-lg'>
      <Link to={`/songs/${song?.key}`}>
      {song.title}
      </Link>
    </p>
    <p className='truncate text-sm'>
    <Link to={`/artists/${(song&&song.artists)?song.artists[0].adamid:""}`}>
    {song.subtitle}
    </Link>
    </p>
   </div>
  </div>
);
}
export default SongCard;

