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
  release_date,
}) {
  const BASE_URL = 'https://image.tmdb.org/t/p/w500/';
  return (
    <div className=" rounded-4xl lg:flex md:items-center   relative shadow-lg  my-5">
      <div className="ratings absolute bottom-0 w-full text-[0.7rem] ">
        <div className="flex justify-between bg-black lg:py-1 ">
          <div className=" font-medium ">
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
      {img1 != null || img2 != null ? (
        <Image
          src={`${BASE_URL}${img1 || img2}` || `${BASE_URL}${img2}`}
          // src={`${BASE_URL}${img1}`}
          width={200}
          height={100}
          alt="image"
          className="w-full h-full object-cover"
        />
      ) : (
        <Image
          src={alter}
          width={400}
          height={100}
          className="w-full h-full object-cover"
          // alt="image"
        />
      )}
      <span className="opacity-0 md:opacity-100 absolute top-0 right-0 rounded-sm p-[0.25em] bg-red-600">
        {lang}
      </span>
      {/* </div> */}
      <div className="md:px-2  w-[100%]  mx-auto text-justify text-[0.9rem] lg:text-[0.8rem] xl:text-[0.9rem]">
        <div className="font-bold  mb-2 text-center text-xl pt-3">
          {title ? title : aliter_title}{' '}
          {release_date != null ? <span>({release_date})</span> : <span></span>}
        </div>
        <p className="text-gray-400 h-[90px] lg:h-[100px]  overflow-auto">{desc}</p>
      </div>
    </div>
  );
}

export default TrendingCard;
