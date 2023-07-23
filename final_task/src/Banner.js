import React, { useEffect, useState } from 'react'
import Axios from './components/Axios'
import Requests from './Requests';
import "./Banner.css";
const Banner = () => {
  const[movie,setMovie]=useState([]);
  useEffect(()=>{
    async function fetchData(){
        const request = await Axios.get(Requests.fetchNetflixOriginals);
        setMovie(
         request.data.results[
            Math.
            floor(Math.random()*request.data.results.length)
        ]
        );
        return request;
    };
fetchData();
  },[]);
  
  function truncate(str,n){
    return str?.length>n?str.substr(0,n-1)+"...":str;
  }
    return (
    <header className='banner'
    style={{
        backgroundSize: "cover",
        backgroundImage:`url(
            "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
        )`,
        backgroundPosition: "center center",
    }}
    >
    <div className='banner_contents'>
        <h1 className='banner_title'>
            {movie?.title||movie?.name||movie?.original_name}
        </h1>
        <button className='banner_button'>Play</button>
        <button className='banner_button'>My List</button>
        <h1 className='banner_description'>
           {truncate(movie?.overview)}
        </h1>
    </div>
    </header>
  )
}
export default Banner;


