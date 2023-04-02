import React from 'react';
import Card from './Card';
import { ImPrevious, ImNext } from 'react-icons/im';
import { useRouter } from 'next/router';

function Results({ movies, page, total_pages, genre }) {
  const router = useRouter();
  // console.log(genre);
  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 pt-4">
        {movies.map((movie) => (
          <Card
            key={movie.id}
            movie_id={movie.id}
            title={movie.title}
            aliter_title={movie.name}
            adult={movie.adult}
            lang={movie.original_language}
            desc={movie.overview}
            vote_avg={movie.vote_average}
            votes={movie.vote_count}
            img1={movie.backdrop_path}
            img2={movie.poster_path}
            release_date={movie.release_date}
          />
        ))}
      </div>
      <div className="flex justify-center">
        {page == 1 ? (
          <ImPrevious className="text-white cursor-pointer text-3xl opacity-30" />
        ) : (
          <ImPrevious
            className="text-white cursor-pointer text-3xl"
            color="white"
            onClick={() => router.push(`?genre=${genre}&page=${page - 1}`)}
          />
        )}

        <h3 className="mx-8">{page}</h3>
        {page == total_pages ? (
          <ImNext className="text-white text-3xl cursor-pointer opacity-40" />
        ) : (
          <ImNext
            className="text-white text-3xl cursor-pointer"
            color="white"
            onClick={() => router.push(`?genre=${genre}&page=${page + 1}`)}
          />
        )}
      </div>
    </div>
  );
}

export default Results;
