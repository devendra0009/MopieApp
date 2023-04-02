import Image from 'next/image';
import React from 'react';
import alter from '../public/aliter_movie_img.webp';

function TrendingCard({
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
  release_date
}) {
    const BASE_URL = 'https://image.tmdb.org/t/p/w500/';
  return (
    <div >
    <div className=" md:w-[80vw] lg:w-[70vw] rounded md:flex md:items-center  relative shadow-lg  mx-auto my-5">
    <div className='w-1/2 lg:w-1/3 mx-auto'>
      {img1 != null || img2 != null ? (
        <Image
          src={`${BASE_URL}${img1 || img2}` || `${BASE_URL}${img2}`}
          // src={`${BASE_URL}${img1}`}
          width={800}
          height={100}
          style={{ objectFit: 'scale-down' }}
          alt="image"
        />
      ) : (
        <Image
          src={alter}
          width={400}
          height={100}
          style={{ objectFit: 'scale-down' }}
          // alt="image"
        />
      )}
      <span className="opacity-0 md:opacity-100 absolute top-0 right-0 rounded-sm p-[0.25em] bg-red-600">
        {lang}
      </span>
      </div>
      <div className="md:px-2 py-4 w-1/2 lg:w-2/3 mx-auto">
        <div className="font-bold text-xl mb-2">
          {title ? title : aliter_title} {release_date!=null?<span>({release_date})</span>:<span></span>}
        </div>
        {/* <button className='' onClick={()=>{navigator.clipboard.writeText(movie_id)}}>[Click to Copy Movie Id: {movie_id}]</button> */}
        <p className="text-gray-400 text-base">{desc}</p>
      
      {/* <div> */}
        <div className="ratings pt-4">
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
          <div className="w-full bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-700">
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
        {/* </div> */}
      </div>
    </div></div>
  );
}

export default TrendingCard;
