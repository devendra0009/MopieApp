import Image from 'next/image';
import React from 'react';
import alter from '../public/aliter_movie_img.webp';

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
  release_date
}) {
  const BASE_URL = 'https://image.tmdb.org/t/p/w500/';
  let dynamicDesc = desc != undefined && desc.substr(0, 200);
  // console.log(movie_id);
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg relative m-5 hover:bg-black text-white">
      {img1 != null || img2 != null ? (
        <Image
          src={`${BASE_URL}${img1 || img2}` || `${BASE_URL}${img2}`}
          // src={`${BASE_URL}${img1}`}
          width={400}
          height={100}
          style={{ objectFit: 'scale-down' }}
          // alt="image"
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
      <span className="absolute top-0 right-0 rounded-sm p-[0.25em] bg-red-600">
        {lang}
      </span>
      <div className="text-center md:px-2 py-4 group">
        <div className="font-bold md:text-xl mb-2">
          {title ? title : aliter_title} {release_date!=null?<span>({release_date})</span>:<span></span>}
        </div>
        <span></span>
        {/* <button className='' onClick={()=>{navigator.clipboard.writeText(movie_id)}}>[Click to Copy Movie Id: {movie_id}]</button> */}
        <p className="text-gray-200 text-sm md:text-[16px] lg:hidden lg:group-hover:block">
          {desc}
        </p>
      </div>
      <div>
        <div className="ratings">
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
      </div>
    </div>
  );
}

export default Card;
