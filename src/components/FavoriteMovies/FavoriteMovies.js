import React from 'react';
import { Link } from 'react-router-dom';
import './FavoriteMovies.css';
import { useStorage } from '../../context/useContext';

export function FavoriteMovies() {
    const { favorites } = useStorage();
  return (
    <>
    {favorites <= 0 ? null :
    <Link to="/favorites" >
    <button
    className="favorites"
    ></button>
   </Link>
}
   </>
  )
}
