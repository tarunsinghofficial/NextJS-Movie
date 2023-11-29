'use client'
import { useEffect, useState } from 'react';
import Card from '../components/Card';
import '../globals.css';

import requests from '../api/api';
import axios from 'axios';
import { MdChevronLeft, MdChevronRight } from "react-icons/md"

function Row({ rowTitle, rowUrl, rowId }) {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        axios.get(rowUrl).then((response) => {
            setMovies(response.data.results)
        })
    }, [])

    console.log(movies);

    const scrollLeft = () => {
        let scroll = document.getElementById('row-slider' + rowId);
        scroll.scrollLeft = scroll.scrollLeft - 500;
    }

    const scrollRight = () => {
        let scroll = document.getElementById('row-slider' + rowId);
        scroll.scrollLeft = scroll.scrollLeft + 500;
    }

    return (
        <div className='space-y-4 mt-10'>
            <div className='text-xl md:text-2xl lg:text-3xl font-bold'>
                {rowTitle}
            </div>
            {/* Row component */}
            <div className='relative flex items-center group'>
                <MdChevronLeft onClick={scrollLeft} size={40} className="hidden group-hover:block bg-white text-black rounded-full absolute left-0 opaciaty-50 hover:opacity-100 cursor-pointer z-10" />
                <div id={'row-slider' + rowId} className='flex flex-row whitespace-nowrap overflow-x-scroll scroll-smooth scroll-hide '>
                    {movies.map((data) => (
                        <Card key={data?.id} title={data?.title} content={data?.overview} year={new Date(data?.release_date).getFullYear()} imgUrl={`https://image.tmdb.org/t/p/original/${data?.poster_path}`} alt_img={data?.title} />
                    ))}
                </div>
                <MdChevronRight onClick={scrollRight} size={40} className="hidden group-hover:block bg-white text-black rounded-full absolute right-0 opaciaty-50 hover:opacity-100 cursor-pointer z-10" />
            </div>
        </div>
    );
}

export default Row;
