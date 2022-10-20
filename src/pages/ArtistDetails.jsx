import { useParams } from "react-router-dom";
import { useSelector} from "react-redux";
import { useGetSongDetailsQuery,useGetTopChartsQuery,useGetRelatedSongsQuery,useGetArtistDetailsQuery  } from "../redux/services/shazamCore";
import { Loader, RelatedSongs } from "../components";
let SongItem=({song})=>{
  console.log(song)
  return (
    <div className="flex flex-row w-full p-1 bg-white/5 backdrop-blur-sm items-center rounded-lg m-1">
     <img src={song.attributes.artwork.url.replace('{w}','100').replace('{h}','100')} className="rounded-lg"/>
     <div>
     <h2 className="text-white m-3 text-lg font-semibold">{song.attributes.name}</h2>
     <h2 className="text-white ml-3">{song.attributes.genreNames[0]}</h2>
     </div>
    </div>
  );
}
const ArtistDetails = () => {
    const {id:artistId}=useParams();
    const {data:ArtistData,isFetching:isFetchingSongData}=useGetArtistDetailsQuery({artistId}); 
    console.log(ArtistData);
   console.log('hello',ArtistData);
    let songs=[];
    if(ArtistData&&ArtistData.songs)songs=Object.values(ArtistData.songs);
   return(
    <div className="flex flex-col m-5 ">
      <div className="flex items-center">
      <img className="w-20 h-20 rounded-full" src={ArtistData&&ArtistData.artists&&ArtistData.artists[artistId]?ArtistData?.artists[artistId].attributes?.artwork?.url.replace('{w}','500').replace('{h}','500'):''}/>
      <h2 className="text-white text-2xl p-3">{ArtistData&&ArtistData.artists&&ArtistData.artists[artistId]?ArtistData?.artists[artistId].attributes?.name:''}</h2>
      </div>
    <h2 className="text-white text-2xl font-bold p-3">Related Songs:</h2>
    {songs?songs.map(song=><SongItem song={song}/>):<div></div>}
 </div>
    )
    
}

export default ArtistDetails;
