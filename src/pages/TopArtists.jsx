import { genres } from "../assets/constants";
import  SongCard  from "../components/SongCard";
import { useGetTopChartsQuery } from "../redux/services/shazamCore";
import Loader from '../components/Loader';
import Error from '../components/Error';
import { ArtistCard } from "../components";
import { useDispatch,useSelector } from "react-redux";
const TopArtists = () => {
  const {activeSong,isPlaying}=useSelector((state)=>state.player);
  const {data,isFetching,error}=useGetTopChartsQuery();
  if(isFetching)return <Loader title="loading"/>
  if(error)return <Error title="error"/>
    return(
        <div className="flex flex-col">
          <div className="flex flex-col items-center mb-5">
            <h2 className="text-white text-3xl font-semibold m-3">Top Artists:</h2>
          </div>
          <div className="flex flex-wrap gap-10">
            {data?.map((track,i)=><ArtistCard track={track}/>)}
          </div>
        </div>
    )
}

export default TopArtists;
