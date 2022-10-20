import { useNavigate } from "react-router-dom";
const ArtistCard = ({track}) => {
  let navigate=useNavigate();
  console.log(track);
  return(
 <div onClick={()=>navigate(`/artists/${track?.artists[0].adamid}`)}>
   <div className="flex flex-col w-[250px] p-5 bg-white/5 backdrop-blur-sm cursor-pointer rounded-lg m-1">
    <img src={track?.images?.coverart} className="rounded-lg"/>
    <h2 className="text-white text-lg mt-2 font-semibold">{track?.subtitle}</h2>
   </div>
 </div>
  )
};

export default ArtistCard;
