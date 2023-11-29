'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import { FaRegHeart, FaHeart } from "react-icons/fa";

function TrendCard({ title, content, imgUrl, year, alt_img }) {
    const [like, setLike] = useState(false);

    const likeMovie = () => {
        setLike(!like)
    }

    return (
        <div className="flex flex-col w-96 space-y-3 px-1 mr-5 rounded-lg text-white ">
            <Image className='w-96 h-56 object-cover rounded-xl transition ease-in-out delay-150 hover:scale-110 duration-300' src={imgUrl} alt={alt_img} width={1000} height={1000} />
            <div className='flex flex-col gap-1 bg-transparent w-96'>
                <h3 className="text-lg text-white font-semibold overflow-hidden">{title ? title : 'No Title'}</h3>
                <h3 className="text-sm text-gray-400 line-clamp-2">{content}</h3>
            </div>
            <div className='flex flex-row justify-between'>
                <p className="text-white text-sm">{year}</p>
                <div className='like-container'>
                    <button onClick={likeMovie}>
                        {like ? (
                            <FaHeart size={20} color='#ff0000' />
                        ) : (
                            <FaRegHeart size={20} color='#ffffff' />
                        )}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default TrendCard