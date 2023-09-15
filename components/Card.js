import Image from 'next/image';
import React, { useContext, useState } from 'react';
import alter from '../public/aliter_movie_img.webp';
import { MdAddCircle } from 'react-icons/md';
import { AuthContext } from '../context/AuthContext';
import axios from 'axios';
import { BsThreeDots } from 'react-icons/bs';

function Card({
  movie_id,
  title,
  aliter_title,
  adult,
  lang,
  desc,
  votes,
  vote_avg,
  img1,
  img2,
  release_date,
}) {
  const BASE_URL = 'https://image.tmdb.org/t/p/w500/';
  // let dynamicDesc = desc != undefined && desc.substr(0, 200);
  const [load,setLoad]=useState(false)

  const { user } = useContext(AuthContext);

  const addToLater = async () => {
    // console.log('added');
    setLoad(true)
    const movieTitle=title!==undefined? title:aliter_title
    const imgCorrect=img1!==undefined?img1:img2
    const movies = {
      img:imgCorrect,
      title: movieTitle
    };
    if (user) {
      try {
        const data = {
          username: user.username,
          movies,
        };
        const response = await axios.post('/api/addToLater', data);
        console.log(response);
        setLoad(false)
      } catch (error) {
        setLoad(false)
        console.error('Error adding tasks:', error);
        // throw error;
      }
    } else {
      setLoad(false)
      alert('Please login first');
    }
    console.log(movies);
  };

  return (
    <>
      <div className=" rounded-lg overflow-hidden shadow-lg relative m-5 hover:cursor-pointer text-white">
        <span className="absolute top-0 right-0 rounded-sm p-[0.25em] bg-red-600">
          {lang}
        </span>
        <div className=" text-sm md:text-md lg:text-lg font-bold mb-2 md:hidden">
          {title ? title : aliter_title}{' '}
          {release_date != null ? <span>({release_date})</span> : <span></span>}
        </div>
        <div className="ratings absolute bottom-0 w-full bg-black text-[80%]">
          <div className="flex justify-between">
            <div className="mb-1 font-medium text-md">
              Ratings: {vote_avg}/10
            </div>
            {adult ? (
              <div className="text-red-400">(Rated 18+ Only)</div>
            ) : (
              <div className="text-green-500">(Suitable for All)</div>
            )}
          </div>
          <div className="w-full bg-gray-200 rounded-full h-1.5  dark:bg-gray-700">
            {vote_avg >= 7 && (
              <div
                className={`bg-green-400 h-1 rounded-full`}
                style={{ width: `${vote_avg * 10}%` }}
              ></div>
            )}
            {vote_avg >= 4 && vote_avg < 7 && (
              <div
                className={`bg-orange-400 h-1 rounded-full`}
                style={{ width: `${vote_avg * 10}%` }}
              ></div>
            )}
            {vote_avg < 4 && (
              <div
                className={`bg-red-400 h-1 rounded-full`}
                style={{ width: `${vote_avg * 10}%` }}
              ></div>
            )}
          </div>
        </div>
        <div className="img h-[30vh] ">
          {img1 != null || img2 != null ? (
            <>
              <Image
                src={`${BASE_URL}${img1 || img2}` || `${BASE_URL}${img2}`}
                width={400}
                height={300}
                className="w-full h-full object-cover"
              />
            </>
          ) : (
            <>
              <Image
                src={alter}
                width={400}
                height={300}
                className="w-full h-full object-cover "
              />
            </>
          )}
        </div>
        <div className=" opacity-0 hover:opacity-100 absolute h-full bg-black hover:bg-opacity-70 bottom-0 text-[80%] overflow-auto text-center md:px-2 py-4 group">
          {!load?<MdAddCircle
            className=" z-100 mx-auto pb-2 transform hover:scale-110 "
            size={40}
            color="blue"
            onClick={addToLater}
          />:<BsThreeDots size={40}
            color="blue" className=" z-100 mx-auto pb-2 transform hover:scale-110 "/>}
          <div className=" text-sm md:text-md lg:text-lg font-bold mb-2 ">
            {title ? title : aliter_title}{' '}
            {release_date != null ? (
              <span>({release_date})</span>
            ) : (
              <span></span>
            )}
          </div>
          <p className="text-gray-200 ">{desc}</p>
        </div>
      </div>
    </>
  );
}

export default Card;
