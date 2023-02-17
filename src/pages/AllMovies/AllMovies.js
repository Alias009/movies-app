import React, { useState, useEffect } from 'react';
import './AllMovies.css';


import { MovieContainer } from '../../components/MovieContainer/MovieContainer';
const APP_URL = process.env.REACT_APP_URL;
const APP_KEY = process.env.REACT_APP_API_KEY;

export function AllMovies() {
  const [movies, setMovies] = useState([]);
useEffect(() => {
    const getMovies = async () => {
        const response = await fetch(`${APP_URL}/trending/movie/week?api_key=${APP_KEY}`)
        const data = await response.json();
      setMovies(data.results)
    }
    getMovies()
}, [])

  return (
    <>
    <section className="section-container">
        
    <h2>All Movies</h2>
    

    <MovieContainer movies={movies}/>

</section>

</>
  );
}
