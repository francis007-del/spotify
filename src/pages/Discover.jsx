import { genres } from "../assets/constants";
import  SongCard  from "../components/SongCard";
import { useGetTopChartsQuery,useGetSongsByGenreQuery } from "../redux/services/shazamCore";
import Loader from '../components/Loader';
import Error from '../components/Error';
import { useDispatch,useSelector } from "react-redux";
import { selectGenreListId } from "../redux/features/playerSlice";

const Discover = () => {
  let dispatch=useDispatch();
  const {activeSong,isPlaying,genreListId}=useSelector((state)=>state.player);
  const {data,isFetching,error}=useGetSongsByGenreQuery(genreListId||'POP');
  if(isFetching)return <Loader title="loading"/>
  if(error)return <Error title="error"/>
    return(
        <div className="flex flex-col">
          <div className="flex flex-col items-center mb-5">
            <h2 className="text-white text-3xl font-semibold m-3">Discover</h2>
            <select 
            onChange={(e)=>{dispatch(selectGenreListId(e.target.value))}}
            value={genreListId||'pop'}
            className="bg-black text-white p-3 rounded-lg outline-none">
              {genres.map(item=><option value={item.value}>{item.title}</option>)}
            </select>
          </div>
          <div className="flex flex-wrap gap-10">
            {data?.map((item,i)=><SongCard song={item} i={i} isPlaying={isPlaying} activeSong={activeSong} data={data}/>)}
          </div>
        </div>
    )
}

export default Discover;
