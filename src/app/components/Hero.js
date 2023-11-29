'use client'
import Image from 'next/image'
import React, { useState, useEffect } from 'react'

import axios from 'axios';
import requests from '../api/api';

function Hero() {

  const [movies, setMovies] = useState([]);
  const [currentMovieIndex, setCurrentMovieIndex] = useState(0);

  useEffect(() => {
    axios.get(requests.fetchPopular).then((response) => {
      setMovies(response.data.results)
    })
  }, [])


  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentMovieIndex((prevIndex) => (prevIndex + 1) % movies.length);
    }, 10000);

    return () => clearInterval(intervalId);
  }, [movies]);

  const movie = movies[currentMovieIndex];

  return (
    <div className='mx-3 md:mx-5 lg:mx-32 relative'>
      <div className='w-full h-[550px]'>
        <div className='container mx-auto bg-gradient-to-r from-[#00050d] absolute w-full h-[550px]' />
        <Image className='w-full h-[550px] object-cover rounded-3xl' alt="image" src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`} width={1000} height={1000} />
      </div>
      <div className='max-w-4xl space-y-6 absolute bottom-1/3 ml-10'>
        <h1 className='text-4xl md:text-5xl lg:text-6xl font-semibold text-white'>{movie?.title}</h1>
        <h2 className='text-xl md:text-2xl lg:text-3xl font-semibold text-white text-opacity-90 line-clamp-1'>{movie?.overview}</h2>
        <div>
          <button className='bg-[#fca311] rounded-full p-2 hover:bg-[#dc982b]'>Watch now</button>
        </div>
        <h3 className="text-lg text-gray-400">Released on {movie?.release_date} </h3>
      </div>
    </div>
  )
}

export default Hero