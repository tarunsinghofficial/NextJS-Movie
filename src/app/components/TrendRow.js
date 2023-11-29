'use client'
import { useEffect, useState } from 'react';
import '../globals.css';

import axios from 'axios';
import TrendCard from './TrendCard';
import { MdChevronLeft, MdChevronRight } from "react-icons/md"

function TrendRow({ rowTitle, rowUrl, rowId }) {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        axios.get(rowUrl).then((response) => {
            setMovies(response.data.results)
        })
    }, [])

    const scrollLeft = () => {
        let scroll = document.getElementById('row')
        scroll.scrollLeft -= 500;
    }

    const scrollRight = () => {
        let scroll = document.getElementById('row')
        scroll.scrollLeft += 500;
    }

    return (
        <div className='space-y-4'>
            <div className='text-xl md:text-2xl lg:text-3xl font-bold'>
                {rowTitle}
            </div>
            {/* row component */}
            <div className='relative flex items-center group'>
                <MdChevronLeft onClick={scrollLeft} size={40} className="hidden group-hover:block bg-white text-black rounded-full absolute left-0 opaciaty-50 hover:opacity-100 cursor-pointer z-10" />
                <div id={'row'} className='flex flex-row whitespace-nowrap overflow-x-scroll scroll-smooth scroll-hide'>
                    {movies.map((data) => (
                        <TrendCard key={data?.id} title={data?.title} content={data?.overview} year={new Date(data?.release_date).getFullYear()} imgUrl={`https://image.tmdb.org/t/p/original/${data?.poster_path}`} alt_img={data?.title} />
                    ))}
                </div>
                <MdChevronRight onClick={scrollRight} size={40} className="hidden group-hover:block bg-white text-black rounded-full absolute right-0 opaciaty-50 hover:opacity-100 cursor-pointer z-10" />
            </div>
        </div>
    );
}

export default TrendRow;
