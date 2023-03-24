import React from 'react';
import { MovieDetail } from '../MovieDetail/MovieDetail';
import { Skeleton } from '../Skeleton/Skeleton';
import './MovieContainer.css';


export function MovieContainer( { movies } ) {



  return (
    <div className="section-main-container" >
      {movies.length ?
       movies.filter(movie => movie.poster_path !== null)?.map((movie) => (
      
        <MovieDetail movie={movie} key={movie.id}/>
      ))  : <Skeleton/>}

    </div>
  );
}
