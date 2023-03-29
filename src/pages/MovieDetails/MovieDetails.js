import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MovieContainer } from "../../components/MovieContainer/MovieContainer";
import { useApi } from "../../hooks/useApi";
import { Loader } from "../../components/Loader/Loader";
import { MovieInfo } from "../../components/MovieInfo/MovieInfo";
import "./MovieDetails.css";

export function MovieDetails() {
  //states
  const [movies, setMovies] = useState([]);
  const [details, setDetails] = useState([]);
 

   //hooks
  const { getMovieDetails, getSimilarMovies } = useApi();
 


  //params from the url
  const params = useParams();
  const id = params.movie;

  
 

  //api calls

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



  
  return (
    <section className="section-details">

      <MovieInfo details={details}/>

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
