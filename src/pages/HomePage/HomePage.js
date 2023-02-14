import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Footer } from '../../components/Footer/Footer'
import { MovieContainer } from '../../components/MovieContainer/MovieContainer';
import { getTrendingMoviesPreview } from '../../hooks/useGetApi';
import './HomePage.css';

export function HomePage() {
const navigate = useNavigate();
const getMovies = getTrendingMoviesPreview()
console.log(getMovies);
  return (
    <>
    <section className="section-container">
        
    <div id="section-container-title-buton" className="section-container-title-button">

        <h2 id="section-container-title">Trending Movies</h2>
    <button onClick={() =>navigate('/all-movies')}
    id="section-container-button" >See more...</button>


    </div>

    <MovieContainer/>
    <div className="categories-container-h3">

<div className="genres-container-title">
    <h2 id="genres-title">GENRES</h2>
</div>

<div className="categories-container-section">
     <span onClick={() => navigate('/genres')}
      className="category">
        ACTION
    </span> 
     <span className="category">
        ACTION
    </span> 
     <span className="category">
        ACTION
    </span> 
     <span className="category">
        ACTION
    </span> 
     <span className="category">
        ACTION
    </span> 
     <span className="category">
        ACTION
    </span> 
     <span className="category">
        ACTION
    </span> 
     <span className="category">
        ACTION
    </span> 
     <span className="category">
        ACTION
    </span> 
     <span className="category">
        ACTION
    </span> 

    
</div>




</div>
   

    

</section>
<Footer/>
</>
  );
}
