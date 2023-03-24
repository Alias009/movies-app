import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Footer } from "../../components/Footer/Footer";
import { Genres } from "../../components/genres/Genres";
import { MovieContainer } from "../../components/MovieContainer/MovieContainer";

import { useApi } from "../../hooks/useApi";
import "./HomePage.css";

export function HomePage() {
  const { getTrendingMovies, getMovieGenres } = useApi();
  const navigate = useNavigate();
  //states
  const [genres, setGenres] = useState([]);
  const [movies, setMovies] = useState([]);

  //api calls
  async function getGenres() {
    const reply = await getMovieGenres();
    setGenres(reply.data);
  }
  async function getMovies() {
    const reply = await getTrendingMovies();
    setMovies(reply.data);
  }

  useEffect(() => {
    getMovies();
    getGenres();
  }, []);

  return (
    <>
      <section className="section-container">
        <div className="section-container-button">
          <h1>Trending Movies</h1>
          <button
            className="discover-button"
            onClick={() => navigate("/all-movies")}
          >
            Discover more!
          </button>
        </div>
        <MovieContainer movies={movies} />

        <div className="categories-container-h3">
          <div className="genres">
            <div className="genres-title">
              <h2>Genres</h2>
            </div>
            <div className="genres-name">
              {genres?.map((item) => (
                <Genres genres={item.name} key={item.id} id={item.id} />
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
