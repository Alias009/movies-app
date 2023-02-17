import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { Footer } from '../../components/Footer/Footer'
import { Genres } from '../../components/genres/genres';
import { MovieContainer } from '../../components/MovieContainer/MovieContainer';
import './HomePage.css';
const APP_URL = process.env.REACT_APP_URL;
const APP_KEY = process.env.REACT_APP_API_KEY;
export function HomePage() {
const navigate = useNavigate();


const [genres, setGenres] = useState([]);
const [movies, setMovies] = useState([]);
useEffect(() => {
    const getMovies = async () => {
        const response = await fetch(`${APP_URL}/discover/movie?api_key=${APP_KEY}`)
        const data = await response.json();
      setMovies(data.results)
    }
    getMovies()
}, []);
useEffect(() => {
    const getGenres = async () => {
        const response = await fetch(`${APP_URL}/genre/movie/list?api_key=${APP_KEY}`)
        const data = await response.json();
      setGenres(data.genres)
    }
    getGenres()
}, []);

genres?.map(item => console.log(item))
// console.log(genres.)

  return (
    <>
    <section className="section-container">
        
    <div id="section-container-title-buton" className="section-container-title-button">

        <h2 id="section-container-title">Trending Movies</h2>
    <button onClick={() =>navigate('/all-movies')}
    id="section-container-button" >See more...</button>


    </div>

    <MovieContainer movies={movies}/>
    <div className="categories-container-h3">

<div className="genres-container-title">
    <h2 id="genres-title">GENRES</h2>
</div>

{genres?.map((item) => (
  <Genres genres={item.name} key={item.id} id={item.id}/>
))}




</div>
   

    

</section>
<Footer/>
</>
  );
}
