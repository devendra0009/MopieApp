import React from 'react';
// import Card from '../../components/Card';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import TrendingCard from '../../components/TrendingCard';
import { ImPrevious, ImNext } from 'react-icons/im';
import { useRouter } from 'next/router';
import {BiTrendingUp} from 'react-icons/bi'
const API_KEY = process.env.API_KEY;

function trending({ results, page, total_pages }) {
  const router = useRouter();
  return (
    <div>
      {/* Header */}
      <Header />
      <h1 className='text-xl uppercase flex justify-center items-center gap-2'><BiTrendingUp className='text-lg'/> Trending Movies <BiTrendingUp className='text-lg'/></h1>
      <div >
        {results.map((r) => (
          <TrendingCard
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
            release_date={r.release_date}
          />
        ))}
      </div>
      <div className="flex justify-center">
      {
        page==1?<ImPrevious className='text-white cursor-pointer text-3xl opacity-30'/>:<ImPrevious
          className="text-white cursor-pointer text-3xl"
          color="white"
          onClick={() => router.push(`?trend&page=${page - 1}`)}
        />
      }
        
        <h3 className="mx-8">{page}</h3>
        {
          page==total_pages?<ImNext className="text-white text-3xl cursor-pointer opacity-40"/>:<ImNext
          className="text-white text-3xl cursor-pointer"
          color="white"
          onClick={() => router.push(`?trend&page=${page + 1}`)}
        />
        }
      </div>
      <Footer />
    </div>
  );
}

export default trending;

export async function getServerSideProps(context) {
  const page=context.query.page;
  const req = await fetch(
    `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US&page=${page==null?1:page}`
  ).then((res) => res.json());
  // for trending movies, we get a url https://api.themoviedb.org/3/trending/all/week?api_key=3b4b0d6c9602439b1ed6b6c536bc9f14&language=en-US
  return {
    props: {
      results: req.results,
      page: req.page,
      total_pages: req.total_pages,
    },
  };
}
