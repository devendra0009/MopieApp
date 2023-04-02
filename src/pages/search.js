import { useRouter } from 'next/router';
import React, { useState } from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Nav from '../../components/Nav';
import Card from '../../components/Card'

function search() {
  const [result,setResult]=useState([]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const val = e.target[0].value;
    const req = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=3b4b0d6c9602439b1ed6b6c536bc9f14&language=en-US&query=${val}`
    ).then((res) => res.json());
    setResult(req.results)
    // console.log(req);
  };
  return (
    <div>
      {/* Header */}
      <Header />
      <div className='flex justify-center my-5 items-center'>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Search a Movie"
            className="p-2 text-black"
            // onClick={handleClick}
          />
          <button
            className="bg-green-500 mx-5 px-3 rounded text-black"
            // onClick={handleClick}
            type="submit"
          >
            Search
          </button>
        </form>
      </div>
      {
        result.length==0?<div></div>:<div className="result grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">{result.map(r=>(
          <Card
            key={r.id}
            movie_id={r.id}
            title={r.title}
            aliter_title={r.name}
            adult={r.adult}
            lang={r.original_language}
            desc={r.overview}
            vote_avg={r.vote_average}
            votes={r.vote_count}
            img1={r.backdrop_path}
            img2={r.poster_path}
          />
        ))}</div>
      }
      <Footer />
    </div>
  );
}

export default search;
