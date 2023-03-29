import React from 'react';
import { useStorage } from "../../context/useContext";
import { Genres } from '../Genres/Genres';
import { LikeButton } from "../LikeButton/LikeButton";
import './MovieInfo.css';

export function MovieInfo({ details }) {
    //hook
    const { isOnFavorites, addMovie, removeMovie } = useStorage();
    const isFavorite = isOnFavorites(details.id);

  return (
    <div className="section-details-container">
    <h1 className="section-details-title">{details?.original_title}</h1>
    <div className="movie-detail">
      {isFavorite ? (
        <LikeButton
          like="movie-liked-button"
          handleEvent={() => {
            removeMovie(details?.id);
          }}
        />
      ) : (
        <LikeButton
          like="movie-like-button"
          handleEvent={() =>
            addMovie({
              id: details?.id,
              title: details?.original_title,
              poster_path: details?.poster_path,
            })
          }
        />
      )}
      <img
        src={`https://image.tmdb.org/t/p/original/${details.poster_path}`}
        alt="movie title"
      />
    </div>
    <div className="container-details">
      <p>
        <i>{details?.tagline}</i>{" "}
      </p>
      <br />

      <h4>Overview</h4>
      <p>{details?.overview}</p>
      <br />
      <p>
        <b>Average rate:</b>
        <br />⭐ {Math.floor(details?.vote_average)}
      </p>
      <br />
      <p>
        <b>Vote count:</b>
        <br />
        {details?.vote_average}
      </p>
      <br />
      <p>
        <b>Release date:</b>
        <br />
        {details?.release_date}
      </p>
      <br />
      <div className="details-genres">
        <div>
          <p>
            <b>Genres:</b>
          </p>
        </div>
        <br />
        {details.genres?.map((item) => (
          <Genres genres={item.name} key={item.id} id={item.id} />
        ))}
      </div>
    </div>

  </div>
  )
}
