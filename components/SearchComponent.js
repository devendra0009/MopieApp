import axios from 'axios';
import React, { useState } from 'react';
import Card from './Card';

const SearchComponent = () => {
  const [query, setQuery] = useState('');
  const [result, setResult] = useState([]);
  const handleChange = async (e) => {
    e.preventDefault();
    const inputValue = e.target.value;
    setQuery(inputValue);
    try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/search/movie?api_key=3b4b0d6c9602439b1ed6b6c536bc9f14&language=en-US&query=${inputValue}`
        );
  
        // Assuming that the API response has a property called "results"
        const { results: movieResults } = response.data;
  
        setResult(movieResults);
      } catch (error) {
        console.error('Error:', error);
        setResult([]);
      }
  };
  return (
    <>
      <div className="flex justify-center my-5 items-center">
        <form>
          <input
            type="text"
            placeholder="Search a Movie"
            className="p-2 text-black outline-none rounded-md"
            value={query}
            onChange={handleChange}
            // onClick={handleClick}
            cna
          />
        </form>
      </div>
      {result?.length == 0 ? (
        <div className='text-center text-2xl text-gray-400'>
            Please Write a Movie Name!!
        </div>
      ) : (
        <div className="result grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {result?.map((r) => (
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
          ))}
        </div>
      )}
    </>
  );
};

export default SearchComponent;
