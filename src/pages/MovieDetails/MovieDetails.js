import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MovieContainer } from "../../components/MovieContainer/MovieContainer";
import { Genres } from "../../components/genres/Genres";
import { useApi } from "../../hooks/useApi";
import "./MovieDetails.css";



export function MovieDetails() {
  //params from the url
  const params = useParams();
  const id = params.movie;

  //states
  const [movies, setMovies] = useState([]);
  const [details, setDetails] = useState([]);
  const [trailer, setTrailer] = useState([]);

  //hooks
  const { getMovieDetails, getMovieTrailer, getSimilarMovies } = useApi();

  //api calls
  async function getDetails() {
    const reply = await getMovieDetails(id);
    setDetails(reply.data);

    
    window.scrollTo({ top: 0, behavior: 'smooth'})
  }
  
  async function getTrailer() {
    const reply = await getMovieTrailer(id);
    setTrailer(reply.data);
  }
  
  async function similarMovies() {
    const reply = await getSimilarMovies(id);
    setMovies(reply.data);
  }



  useEffect(() => {
    getDetails();
    getTrailer();
    similarMovies();
  }, [id]);


  return (
    <section className="section-details">
      {
        <div className="section-details-container">
          <h2 className="section-details-title">{details?.original_title}</h2>
          <div className="movie-detail">
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
              <p>
                <b>Genres:</b>
              </p>
              <br />
              {details.genres?.map((item) => (
                <Genres genres={item.name} key={item.id} id={item.id} />
              ))}
            </div>
          </div>
          <div className="details-trailer">
            <h3>Trailer</h3>
            <br />
            <iframe
              controls={true}
              src={`https://www.youtube.com/embed/${trailer}`}
            ></iframe>
          </div>
        </div>
      }
      <div className="section-similar-movies">
        <h3>Similar Movies</h3>

        <MovieContainer movies={movies} />
      </div>
    </section>
  );
}
