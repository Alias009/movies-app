import React from 'react';
import { MovieContainer } from '../../components/MovieContainer/MovieContainer';
import { useStorage } from '../../context/useContext';

export function Favorites() {
    const { favorites } = useStorage()
    console.log(favorites)
  return (
    <>
    <MovieContainer movies={favorites}/>
    </>
  )
}
