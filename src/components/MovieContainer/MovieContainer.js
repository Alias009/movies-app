import React from 'react';
import { MovieDetail } from '../MovieDetail/MovieDetail';
import './MovieContainer.css';


export function MovieContainer( { movies } ) {



  return (
    <div className="section-main-container" >
      
      { movies.filter(movie => movie.poster_path !== null)?.map((movie) => (
      
        <MovieDetail movie={movie} key={movie.id}/>
      ))}

    </div>
  );
}
