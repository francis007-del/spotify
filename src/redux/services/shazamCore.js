import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react';
    export const ShazamCoreApi=createApi({
        reducerPath:'shazamCoreApi',
        baseQuery:fetchBaseQuery({
            baseUrl:'https://shazam-core.p.rapidapi.com/v1',
            prepareHeaders:(headers)=>{
                headers.set('X-RapidAPI-Key','d7fdd2f86dmshdfd86fcc3596e59p18503djsn75436ea10df4');
                return headers;
            }
        }),
        endpoints:(builder)=>({
         getTopCharts:builder.query({query:()=>'/charts/world'}),
         getSongsByGenre:builder.query({query:(genre)=>`/charts/genre-world?genre_code=${genre}`}),    
         getSongDetails:builder.query({query:({songid})=>`/tracks/details?track_id=${songid}`}),
         getRelatedSongs:builder.query({query:({songid})=>`/tracks/related?track_id=${songid}`}),
         getSongsByCountry:builder.query({query:({country})=>`/charts/country?country_code=${country}`}),
         getArtistDetails:builder.query({query:({artistId})=>`/artists/details?artist_id=${artistId}`}),
         getSongsBysearch:builder.query({query:(search)=>`/search/multi?search_type=SONGS_ARTISTS&query=${search}`}),
        })
    });
    export const {useGetTopChartsQuery,useGetSongDetailsQuery,useGetRelatedSongsQuery,useGetSongsByCountryQuery,useGetArtistDetailsQuery,useGetSongsByGenreQuery,useGetSongsBysearchQuery}=ShazamCoreApi