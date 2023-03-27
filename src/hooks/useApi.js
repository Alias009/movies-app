const APP_URL = process.env.REACT_APP_URL;
const APP_KEY = process.env.REACT_APP_API_KEY;

export function useApi() {
  const searchMovies = async (query, p = 1) => {
    const response = await fetch(
      `${APP_URL}/search/movie?api_key=${APP_KEY}&query=${query}&page=${p}&language=${navigator.language}`
    );
    const data = await response.json();
    return { data: data.results };
  };
  
  const getTrendingMovies = async (p = 1) => {
    const response = await fetch(
      `${APP_URL}/discover/movie?api_key=${APP_KEY}&page=${p}`
    );
    const data = await response.json();
    return { data: data.results };
  };

  const getMovieGenres = async () => {
    const response = await fetch(
      `${APP_URL}/genre/movie/list?api_key=${APP_KEY}`
    );
    const data = await response.json();
    return { data: data.genres };
  };

  const getMoviesBygenre = async (id, p = 1) => {
    const response = await fetch(
      `${APP_URL}/discover/movie?api_key=${APP_KEY}&with_genres=${id}&page=${p}&language=${navigator.language}`
    );

    const data = await response.json();
    return { data: data.results };
  };

  const getMovieDetails = async (id) => {
    const response = await fetch(
      `${APP_URL}/movie/${id}?api_key=${APP_KEY}&language=${navigator.language}`
    );
    const data = await response.json();
    return { data: data };
  };

  const getMovieTrailer = async (id) => {
 try {
  const response = await fetch(
    `${APP_URL}/movie/${id}/videos?api_key=${APP_KEY}&language=${navigator.language}`
  );
  const data = await response.json();
    return { data: data.results[0].key };

 } catch (error) {
console.log(error);
return { data: null }; 
// many trailers are not avilable 
 } 
  };

  const getSimilarMovies = async (id) => {
    const response = await fetch(
      `${APP_URL}/movie/${id}/similar?api_key=${APP_KEY}&language=${navigator.language}`
    );
    const data = await response.json();
    return { data: data?.results };
  };
  return {
    searchMovies,
    getTrendingMovies,
    getMovieGenres,
    getMoviesBygenre,
    getMovieDetails,
    getMovieTrailer,
    getSimilarMovies,
  };
}
