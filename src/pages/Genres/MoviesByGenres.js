import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { MovieContainer } from "../../components/MovieContainer/MovieContainer";
import { useApi } from "../../services/useApi";
import { useLazyLoading } from "../../hooks/useLazyLoading";
import "./MoviesByGenre.css";

export function MoviesByGenres() {
  //states
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);

  //hooks
  const params = useParams(); //get params from url
  const { getMoviesBygenre } = useApi();

  const genreID = params.id.split("-")[0]; //get the genre code
  const genreName = params.id.split("-")[1]; //get the genre name

  //calls to api
  async function pagination(p=1) {
    const reply = await getMoviesBygenre(genreID, p);
    setMovies([...movies, ...reply.data]);
  }

  //lazyloading
  const { observe } = useLazyLoading(getMoviesBygenre);
  const lastElement = useRef(null);

  //this will add the "infine scroll"
  useEffect(() => {
    const handleScroll = () => {
      const { clientHeight, scrollTop, scrollHeight } =
        document.documentElement;
      const isScrollDown = clientHeight + scrollTop >= scrollHeight - 50;

      if (isScrollDown) {
        pagination(page);
        setPage(page + 1);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  useEffect(() => {
    if (lastElement.current) {
      observe(lastElement.current);
    }
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [movies]);

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
