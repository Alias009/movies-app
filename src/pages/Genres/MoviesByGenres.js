import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import { MovieContainer } from '../../components/MovieContainer/MovieContainer'
import './MoviesByGenre.css';
const APP_URL = process.env.REACT_APP_URL;
const APP_KEY = process.env.REACT_APP_API_KEY;
export function MoviesByGenres() {
  const params = useParams()
  
  console.log()

  const genreID = params.id.split('-')[0];
  const genreName = params.id.split('-')[1];

  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);//

  const getMoviesByGenre = async () => {
    const response = await fetch(`${APP_URL}/discover/movie/?api_key=${APP_KEY}&with_genres=${genreID}&language=${navigator.language}`)
    const data = await response.json();
  setMovies(data.results)
}
  useEffect(() => {
    getMoviesByGenre()
}, []);

const paginatedMoviesBygenre = async (p = 1) => {
  const response = await fetch(`${APP_URL}/discover/movie?api_key=${APP_KEY}&with_genres=${genreID}&page=${p}&language=${navigator.language}`)
  const data = await response.json();
  setMovies([...movies, ...data.results ]) 
}

useEffect(() => {
  const handleScroll = (event) => {
    const { clientHeight, scrollTop, scrollHeight } = document.documentElement;
    const isScrollDown = (clientHeight + scrollTop) >= (scrollHeight - 100);
       
    if (isScrollDown) {
      paginatedMoviesBygenre(page)
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
    
    <div className="categories-container-title">
                 <h2 className="categories-title">{genreName} Movies</h2> 
                </div>
                
                <div className="movies-by-trends-container-img">

         
                        <MovieContainer movies={movies}/>
                
   
                </div>
    </>
  )
}
