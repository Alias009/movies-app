import React, {useEffect, useState} from 'react'
import { useLocation } from 'react-router-dom';
import { MovieContainer } from '../components/MovieContainer/MovieContainer';
import './Search.css';
const APP_URL = process.env.REACT_APP_URL;
const APP_KEY = process.env.REACT_APP_API_KEY;


export function SeachResults() {
  const location = useLocation();
  const query = location.state?.inputValue;
  console.log(location.state?.inputValue)
  

  const [movies, setMovies] = useState([]);
useEffect(() => {
    const searchMovies = async () => {
        const response = await fetch(`${APP_URL}/search/movie?api_key=${APP_KEY}&query=${query}`)
        const data = await response.json();
      setMovies(data.results)
    }
    searchMovies()
}, []);
console.log(movies)
  return (
    <>
    
    <div className="categories-container-title">
                 <h2 className="categories-title">Results of {query}</h2> 
                </div>
                
                <div className="movies-by-trends-container-img">

         
                        <MovieContainer movies={movies}/>
                
   
                </div>
    </>
  )
}
