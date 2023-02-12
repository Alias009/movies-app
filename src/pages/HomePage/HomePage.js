import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Footer } from '../../components/Footer/Footer'
import { MovieContainer } from '../../components/MovieContainer/MovieContainer';
import './HomePage.css';

export function HomePage() {
const navigate = useNavigate();
  return (
    <>
    <section className="section-container">
        
    <div id="section-container-title-buton" className="section-container-title-button">

        <h2 id="section-container-title">Trending Movies</h2>
    <button onClick={() =>navigate('/all-movies')}
    id="section-container-button" className="inactive">See more...</button>


    </div>

    <MovieContainer/>
    <div class="categories-container-h3">

<div class="genres-container-title">
    <h2 id="genres-title">GENRES</h2>
</div>

<div class="categories-container-section">
     <span onClick={() => navigate('/genres')}
      class="category">
        ACTION
    </span> 
     <span class="category">
        ACTION
    </span> 
     <span class="category">
        ACTION
    </span> 
     <span class="category">
        ACTION
    </span> 
     <span class="category">
        ACTION
    </span> 
     <span class="category">
        ACTION
    </span> 
     <span class="category">
        ACTION
    </span> 
     <span class="category">
        ACTION
    </span> 
     <span class="category">
        ACTION
    </span> 
     <span class="category">
        ACTION
    </span> 

    
</div>




</div>
   

    

</section>
<Footer/>
</>
  );
}
