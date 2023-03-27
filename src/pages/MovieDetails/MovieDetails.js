import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MovieContainer } from "../../components/MovieContainer/MovieContainer";
import { Genres } from "../../components/genres/Genres";
import { useApi } from "../../hooks/useApi";
import { LikeButton } from "../../components/LikeButton/LikeButton";
import { useStorage } from "../../context/useContext";
import { Loader } from "../../components/Loader/Loader";
import "./MovieDetails.css";

export function MovieDetails() {
  //states
  const [movies, setMovies] = useState([]);
  const [details, setDetails] = useState([]);
  const [trailer, setTrailer] = useState('');

   //hooks
  const { getMovieDetails, getSimilarMovies } = useApi();
  const { isOnFavorites, addMovie, removeMovie } = useStorage();


  //params from the url
  const params = useParams();
  const id = params.movie;

  
 

  //api calls
  // async function getTrailer() {
  //   const reply = await getMovieTrailer(id);
    
  //     setTrailer(reply.data);
    
  // }
  async function getDetails() {
    const reply = await getMovieDetails(id);
    setDetails(reply.data);

    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  async function similarMovies() {
    const reply = await getSimilarMovies(id);
    setMovies(reply.data);
  }

  useEffect(() => {
   
    getDetails();
    similarMovies();
  }, [id]);

  if (details.length === 0) {
    return <Loader />;
  }

  console.log(trailer)

  const isFavorite = isOnFavorites(details.id);
  return (
    <section className="section-details">
      {
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
          {/* <div className="details-trailer">
            {
              <>
               <h3>Trailer</h3>
                <br />

                <iframe
                  controls={true}
                  src={`https://www.youtube.com/embed/${trailer}`}
                />
                
              </>
            }
          </div> */}
        </div>
      }
      <div className="section-similar-movies">
        {movies.length ? (
          <>
            <h3>Similar Movies</h3>

            <MovieContainer movies={movies} />
          </>
        ) : (
          <></>
        )}
      </div>
    </section>
  );
}
