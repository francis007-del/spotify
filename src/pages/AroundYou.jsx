import React from 'react';
import axios from 'axios';
import { useState,useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Error } from '../components';
import SongCard from '../components/SongCard';
import {Loader} from '../components';
import { useGetSongsByCountryQuery } from '../redux/services/shazamCore';
const AroundYou = () => {
   let [country,setCountry]= useState('');
   let [loading,setLoading]= useState(true);
   const {activeSong,isPlaying}=useSelector((state)=>state.player);
   useEffect(()=>{
    axios.get('https://geo.ipify.org/api/v1?apiKey=at_8u7t0OEKlDhdgpolVKqRyYxPfOwre').then((res)=>setCountry(res?.data?.location?.country));
   },[country])
   console.log(country);
   const {data,isFetching,error}= useGetSongsByCountryQuery({country});
   console.log(data);
    return(
        <div className="flex flex-col">
        <div className="flex flex-col items-center mb-5">
          <h2 className="text-white text-3xl font-semibold m-3">Around You:</h2>
        </div>
        <div className="flex flex-wrap gap-10">
          {data?.map((item,i)=><SongCard song={item} i={i} isPlaying={isPlaying} activeSong={activeSong} data={data}/>)}
        </div>
      </div>
    )
}

export default AroundYou;
