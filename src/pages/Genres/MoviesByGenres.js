import React, {useEffect, useState} from 'react'
import { MovieContainer } from '../../components/MovieContainer/MovieContainer'
import './MoviesByGenre.css';
const APP_URL = process.env.REACT_APP_URL;
const APP_KEY = process.env.REACT_APP_API_KEY;
export function MoviesByGenres() {
  const [movies, setMovies] = useState([]);
useEffect(() => {
    const getMovies = async () => {
        const response = await fetch(`${APP_URL}/discover/movie?api_key=${APP_KEY}`)
        const data = await response.json();
      setMovies(data.results)
    }
    getMovies()
}, []);
  return (
    <>
    
    <div className="categories-container-title">
                 <h2 className="categories-title">Action</h2> 
                </div>
                
                <div className="movies-by-trends-container-img">

         
                        <MovieContainer/>
                
   
                </div>
    </>
  )
}
