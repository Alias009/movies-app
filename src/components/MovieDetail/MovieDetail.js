import React from 'react';
import { Link } from 'react-router-dom';
import { LikeButton } from '../LikeButton/LikeButton';
import { useStorage } from '../../context/useContext';
import './MovieDetail.css';

export function MovieDetail({ movie }) {
    const { addMovie, removeMovie, isOnFavorites } = useStorage();
    const isFavorite = isOnFavorites(movie?.id);
    // console.log(isFavorite)
  return (
    <div className="movies-container">
          <Link to={`/details/${movie?.id}`}>
          
          <img
            className="movies-container-img"
            src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`}
          alt={movie?.title}
          />
          </Link>
          <span className="movies-container-name">
            {movie?.title}
          </span>
          
          {isFavorite ? <LikeButton 
          like='liked-button'
          handleEvent={() => {
removeMovie(movie?.id)
          }}
          /> :
          <LikeButton
          like='like-button'
          handleEvent={() => addMovie({id: movie?.id, title: movie?.title, poster_path: movie?.poster_path})}
          />
          }

          
        </div>
  )
}
