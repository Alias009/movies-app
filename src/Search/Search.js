import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MovieContainer } from "../components/MovieContainer/MovieContainer";
import { useApi } from "../hooks/useApi";
import "./Search.css";

export function SeachResults() {
  const params = useParams();
  const { searchMovies } = useApi();

  //states
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1); //

  //this function ia call only ones
  //first page of results
  async function getMovies() {
    const reply = await searchMovies(params.query);
    setMovies(reply.data);
  }
  //this function add the "infinite scroll" when scrolling down
  async function paginatedResult(p) {
    const paginated = await searchMovies(params.query, p);
    setMovies([...movies, ...paginated.data]);
  }

  useEffect(() => {
    getMovies();
  }, []);

  useEffect(() => {
    const handleScroll = (event) => {
      const { clientHeight, scrollTop, scrollHeight } =
        document.documentElement;
      const isScrollDown = clientHeight + scrollTop >= scrollHeight - 100;

      if (isScrollDown) {
        paginatedResult(page);
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
        <h2 className="categories-title">Results of {params.query}</h2>
      </div>

      <div className="movies-by-trends-container-img">
        <MovieContainer movies={movies} />
      </div>
    </>
  );
}
