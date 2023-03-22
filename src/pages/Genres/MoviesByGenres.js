import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MovieContainer } from "../../components/MovieContainer/MovieContainer";
import { useApi } from "../../hooks/useApi";
import "./MoviesByGenre.css";

export function MoviesByGenres() {
  //states
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1); 

  //hook 
  const { getMoviesBygenre } = useApi();

  //get params from url
  const params = useParams();

  const genreID = params.id.split("-")[0]; //get the genre code
  const genreName = params.id.split("-")[1];//get the genre name

//call to api
  async function getMoviesBygenrePagination (p) {
    const reply = await getMoviesBygenre(genreID, p);
    setMovies([...movies, ...reply.data]);
  };



  //this will add the "infine scroll"
  useEffect(() => {
    const handleScroll = (event) => {
      const { clientHeight, scrollTop, scrollHeight } = document.documentElement;
      const isScrollDown = clientHeight + scrollTop >= scrollHeight - 100;

      if (isScrollDown) {
        getMoviesBygenrePagination(page);
        setPage(page + 1);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [page]);

  return (
    <>
      <div className="categories-container-title">
        <h2 className="categories-title">{genreName} Movies</h2>
      </div>

      <div className="movies-by-trends-container-img">
        <MovieContainer movies={movies} />
      </div>
    </>
  );
}
