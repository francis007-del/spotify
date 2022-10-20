import { useParams } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import { setActiveSong,playPause } from "../redux/features/playerSlice";
import { useGetSongDetailsQuery,useGetTopChartsQuery,useGetRelatedSongsQuery  } from "../redux/services/shazamCore";
import { RelatedSongs } from "../components";
const SongDetails = () => {
    const {songid}=useParams();
    const {activeSong,isPlaying}=useSelector((state)=>state.player);
    const {data:songData,isFetching:isFetchingSongData}=useGetSongDetailsQuery({songid}) 
    const {data,isFetching,error}=useGetTopChartsQuery();
    const {data:relatedSongs,isFetching:isFetchingrelatedSong,error:relatedSongError}=useGetRelatedSongsQuery({songid});
    let lyrics=songData?.sections[1]?.text;
    return(
        <div>
           <div className="flex flex-col justify-center items-center">
              <div className="flex flex-row items-center bg-black w-full rounded-lg opacity-70">
                <img src={songData?.images?.coverart} className="rounded-full  w-[150px] p-2"/>
                <div className="flex flex-col">
                    <h2 className="text-white px-3 text-3xl font-semibold">{songData?.title}</h2>
                    <h2 className="text-white px-3 text-xl">{songData?.genres?.primary}</h2>
                </div>
              </div>
            <h2 className="text-white text-4xl font-bold p-5">Lyrics:</h2>
            {lyrics?lyrics.map(item=><p className="text-white text-1xl text-gray-400 font-semibold">{item}</p>):<h2 className="text-white">Sorry No Lyrics</h2>}
           </div> 
           <RelatedSongs songs={relatedSongs}/>
        </div>
    )
}

export default SongDetails;
