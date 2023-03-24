import React from "react";
import { Link } from "react-router-dom";
import "./Genres.css";



export function Genres({ genres, id }) {
  function handleClick() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  return (
    <>
      <Link
        onClick={handleClick}
        to={`/genres/${id}-${genres}`}
        className="category"
      >
        {genres}
      </Link>
    </>
  );
}
