import React from 'react'
import { MovieContainer } from '../../components/MovieContainer/MovieContainer'
import './MoviesByGenre.css'
export function MoviesByGenres() {
  return (
    <>
    
    <div className="categories-container-title">
                 <h2 className="categories-title">Action</h2> 
                </div>
                
                <div className="movies-by-trends-container-img">

         
                        <MovieContainer/>
                
   
                </div>
    </>
  )
}
