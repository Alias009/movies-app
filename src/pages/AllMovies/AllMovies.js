import React from 'react';
import './AllMovies.css';


import { MovieContainer } from '../../components/MovieContainer/MovieContainer';


export function AllMovies() {

  return (
    <>
    <section className="section-container">
        
    <h2>All Movies</h2>
    

    <MovieContainer/>

</section>

</>
  );
}
