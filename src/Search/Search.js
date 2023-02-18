import React, {useEffect, useState} from 'react'
import { useLocation } from 'react-router-dom';
// import { MovieContainer } from '../../components/MovieContainer/MovieContainer'
import './Search.css';
const APP_URL = process.env.REACT_APP_URL;
const APP_KEY = process.env.REACT_APP_API_KEY;
export function SeachResults() {
  const location = useLocation();
  console.log(location)
  const genreID = location.state.id;
  const genreName = location.state;

  const [movies, setMovies] = useState([]);
useEffect(() => {
    const getMovies = async () => {
        const response = await fetch(`${APP_URL}/discover/movie/?api_key=${APP_KEY}&with_genres=${genreID}`)
        const data = await response.json();
      setMovies(data.results)
    }
    // getMovies()
}, []);
console.log(movies)
  return (
    <>
    
    <div className="categories-container-title">
                 <h2 className="categories-title">{genreName} Movies</h2> 
                </div>
                
                <div className="movies-by-trends-container-img">

         
                        {/* <MovieContainer movies={movies}/> */}
                
   
                </div>
    </>
  )
}
