'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import { FaHeart, FaRegHeart } from "react-icons/fa";

function Card({ title, content, imgUrl, year, alt_img }) {


    const [like, setLike] = useState(false);

    const likeMovie = () => {
        setLike(!like)
    }

    return (
        <div className="flex flex-col w-40 space-y-3 px-1 mr-5 rounded-lg text-white ">
            <Image className='w-40 h-56 object-cover rounded-xl transition ease-in-out delay-150 hover:scale-110 duration-300' src={imgUrl} alt={alt_img} width={100} height={100} />
            <div className='flex flex-col gap-1 bg-transparent w-40'>
                <h3 className="text-md text-white font-semibold w-36 overflow-hidden">{title}</h3>
                <h3 className="text-sm text-gray-400 line-clamp-2">{content}</h3>
            </div>
            <div className='flex flex-row justify-between'>
                <p className="text-yellow-400 text-sm">{year}</p>
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

export default Card