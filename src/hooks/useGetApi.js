

const APP_URL = process.env.REACT_APP_URL;
const APP_KEY = process.env.REACT_APP_API_KEY;



 async function getTrendingMoviesPreview () {
    //preview for home page
     const response = await fetch(`${APP_URL}/discover/movie?api_key=${APP_KEY}`)
    const data = await response.json();
    console.log(data)
 }
 async function getAllTrendingMovies () {
    //all trends
     const response = await fetch(`${APP_URL}/trending/movie/week?api_key=${APP_KEY}`)
    const data = await response.json();
    console.log(data)
 }
 async function getMoviesByGenres () {
    //by genres
     const response = await fetch(`${APP_URL}/genre/movie/list?api_key=${APP_KEY}`)
    const data = await response.json();
    console.log(data)
 }
 async function getMoviesBygenreID (id) {
    //filter by genre specific id
     const response = await fetch(`${APP_URL}/discover/movie/${id}?api_key=${APP_KEY}`)
    const data = await response.json();
    console.log(data)
 }
 async function getMoviesDetailsID (id) {
    //movie details
     const response = await fetch(`${APP_URL}/movie/${id}?api_key=${APP_KEY}`)
    const data = await response.json();
    console.log(data)
 }
export { getTrendingMoviesPreview }
