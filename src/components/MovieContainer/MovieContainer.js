import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NotFound from '../../img/404.png';
import './MovieContainer.css';


export function MovieContainer( { movies } ) {
const navigate = useNavigate();
    const [likeMovie, setLikeMovie] = useState(false);
    // const [notFoundImage, setNotFoundImage] = useState(NotFound);
  const handleLike = () => {
    
    setLikeMovie((prevState) => !prevState );
  }
   const handleMovieDetails = (movieID) => {
    navigate('/details/' + movieID, {
      state:{
        movieID
      }
    })
    // console.log(movieID);
    window.scrollTo(0, 0);
   }
   const handleError = (e) => {
    // e.setAttribute('src', NotFound)
    e.poster_path = NotFound
   }
  return (
    <div
      
      className="section-main-container section-main-container-scroll-vertical"
    >
      {movies.filter(movie => movie.poster_path !== null)?.map((movie) => (
      
        <div className="movies-container" key={movie?.title}>
          <img
            onClick={() => handleMovieDetails(movie.id)}
            onError={() => handleError}
            className="movies-container-img"
            src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
          alt={movie.title}
          />
          <span className="movies-container-name">
            {movie?.title}
          </span>
          <button
            onClick={handleLike}
            className={
              likeMovie ? " like-button like-button-clicked" : "like-button"
            }
          ></button>
        </div>
      ))}
    </div>
  );
}
