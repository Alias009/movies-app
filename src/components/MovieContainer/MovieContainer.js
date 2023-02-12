import React, { useState } from 'react'
import Poster from  "../../img/starwars.jpg";
import './MovieContainer.css'
export function MovieContainer() {
    const [likeMovie, setLikeMovie] = useState(false);
  const handleLike = () => {
    setLikeMovie((prevState) => !prevState );
  }
   const handleMovieDetails = () => {
    console.log('clicked');
   }
  return (
    <div id="section-main-container" className="section-main-container section-main-container-scroll-vertical">

    <div className="movies-container">
     <img onClick={handleMovieDetails} 
     className="movies-container-img" src={Poster} alt="movie"/>
     <span className="movies-container-img-name">STAR-WARS</span>
     <button onClick={handleLike}
     className={likeMovie ? ' like-button like-button-clicked' : 'like-button'}></button>
     </div>

    <div className="movies-container">
     <img onClick={handleMovieDetails} 
     className="movies-container-img" src={Poster} alt="movie"/>
     <span className="movies-container-img-name">STAR-WARS</span>
     <button onClick={handleLike}
     className={likeMovie ? ' like-button like-button-clicked' : 'like-button'}></button>
     </div>

    <div className="movies-container">
     <img onClick={handleMovieDetails} 
     className="movies-container-img" src={Poster} alt="movie"/>
     <span className="movies-container-img-name">STAR-WARS</span>
     <button onClick={handleLike}
     className={likeMovie ? ' like-button like-button-clicked' : 'like-button'}></button>
     </div>
    <div className="movies-container">
     <img onClick={handleMovieDetails} 
     className="movies-container-img" src={Poster} alt="movie"/>
     <span className="movies-container-img-name">STAR-WARS</span>
     <button onClick={handleLike}
     className={likeMovie ? ' like-button like-button-clicked' : 'like-button'}></button>
     </div>
    <div className="movies-container">
     <img onClick={handleMovieDetails} 
     className="movies-container-img" src={Poster} alt="movie"/>
     <span className="movies-container-img-name">STAR-WARS</span>
     <button onClick={handleLike}
     className={likeMovie ? ' like-button like-button-clicked' : 'like-button'}></button>
     </div>


   </div>
  )
}
