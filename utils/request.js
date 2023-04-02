const API_KEY=process.env.API_KEY;
export default{
    fetchTrending:{
        title: "Trending",
        url: `/trending/all/week?api_key=${API_KEY}&language=en-US`
    },
    fetchTopRated:{
        title: "Top Rated",
        url: `/movie/top_rated?api_key=${API_KEY}&language=en-US`
    },
    fetchUpcoming:{
        title: "Upcoming",
        url: `/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`
    },
    fetchActionMovies:{
        title: "Action",
        url: `/discover/movie?api_key=${API_KEY}&with_genres=28`
    },
    fetchAnimationMovies:{
        title: "Animation",
        url: `/discover/movie?api_key=${API_KEY}&with_genres=16`
    },
    fetchHorrorMovies:{
        title: "Horror",
        url: `/discover/movie?api_key=${API_KEY}&with_genres=27`
    },
    fetchComedyMovies:{
        title: "Comedy",
        url: `/discover/movie?api_key=${API_KEY}&with_genres=35`
    },
    fetchThrillerMovies:{
        title: "Thriller",
        url: `/discover/movie?api_key=${API_KEY}&with_genres=53`
    },
    fetchMysteryMovies:{
        title: "Mystery",
        url: `/discover/movie?api_key=${API_KEY}&with_genres=9648`
    },
    fetchRomanceMovies:{
        title: "Romance",
        url: `/discover/movie?api_key=${API_KEY}&with_genres=10749`
    },
    fetchFamilyMovies:{
        title: "Family",
        url: `/discover/movie?api_key=${API_KEY}&with_genres=10751`
    },
    fetchNowPlaying:{
        title: "Now Playing",
        url: `/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`
    },
    fetchTVPopular:{
        title: "TV Popular",
        url: `/tv/popular?api_key=${API_KEY}&language=en-US&page=1`
    },
}