import React, { useState, useEffect } from 'react';
import './AllMovies.css';


import { MovieContainer } from '../../components/MovieContainer/MovieContainer';
import { Skeleton } from '../../components/Skeleton/Skeleton';
const APP_URL = process.env.REACT_APP_URL;
const APP_KEY = process.env.REACT_APP_API_KEY;


export function AllMovies() {
  const [movies, setMovies] = useState([]);// display by default 
  const [page, setPage] = useState(1);//

  const getTrendingMovies = async () => {
    const response = await fetch(`${APP_URL}/discover/movie?api_key=${APP_KEY}`)
    const data = await response.json();
  setMovies(data.results)
  }

  



useEffect(() => {
  getTrendingMovies();
}, [])

const trendingPaginatedMovies = async (p = 1) => {
  const response = await fetch(`${APP_URL}/discover/movie?api_key=${APP_KEY}&page=${p}`)
  const data = await response.json();
  setMovies([...movies, ...data.results ]) 

}

useEffect(() => {
  const handleScroll = (event) => {
    const { clientHeight, scrollTop, scrollHeight } = document.documentElement;
    const isScrollDown = (clientHeight + scrollTop) >= (scrollHeight - 100);
       
    if (isScrollDown) {
      trendingPaginatedMovies(page)
      setPage(page + 1)
    }
  };

  window.addEventListener('scroll', handleScroll);

  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}, [page]);

  return (
    <>
    <section className="section-container">
        
    <h2>All Movies</h2>
    

    {movies ? <MovieContainer movies={movies}/> : <Skeleton/>}
  
    
    

</section>

</>
  );
}
