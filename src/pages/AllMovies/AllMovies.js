import React, { useState, useEffect } from "react";
import { useApi } from "../../hooks/useApi";
import { MovieContainer } from "../../components/MovieContainer/MovieContainer";
import "./AllMovies.css";


export function AllMovies() {
  //states
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  //hook
  const { getTrendingMovies } = useApi();

  //api calls
  async function getMovies() {
    const reply = await getTrendingMovies();
    setMovies(reply.data);
  }
  //paginated results
  async function trendingPaginatedMovies(p) {
    const reply = await getTrendingMovies(p);
    setMovies([...movies, ...reply.data]);
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
        trendingPaginatedMovies(page);
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
      <section className="section-container">
        <h2>All Movies</h2>
        <MovieContainer movies={movies} />
      </section>
    </>
  );
}
