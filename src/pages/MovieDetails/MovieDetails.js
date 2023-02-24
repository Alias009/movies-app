import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { MovieContainer } from '../../components/MovieContainer/MovieContainer';
import { Genres } from '../../components/genres/Genres';
import './MovieDetails.css';


const APP_URL = process.env.REACT_APP_URL;
const APP_KEY = process.env.REACT_APP_API_KEY;
export function MovieDetails() {
const location = useLocation();
// console.log(location.state.movieID, 'location')
const id = location?.state.movieID;

  const [movies, setMovies] = useState([]);
  const [details, setDetails] = useState([]);
  const [trailer, setTrailer] = useState([]);

  useEffect(() => {
    const getInfo = async () => {
        const response = await fetch(`${APP_URL}/movie/${id}?api_key=${APP_KEY}&language=${navigator.language}`)
        const data = await response.json();
      setDetails(data)
      // console.log(data)
   
    }
    getInfo()
  }, [id]);

  useEffect(() => {
    const getInfo = async () => {
        const response = await fetch(`${APP_URL}/movie/${id}/videos?api_key=${APP_KEY}&language=${navigator.language}`)
        const data = await response.json();
      setTrailer(data?.results[0].key)
      // console.log(data)
   
    }
    getInfo()
  }, [id])
  
  // console.log(trailer)


  useEffect(() => {
      const getSimilarMovies = async () => {
          const response = await fetch(`${APP_URL}/movie/${id}/similar?api_key=${APP_KEY}&language=${navigator.language}`)
          const data = await response.json();
        setMovies(data?.results)
      }
      getSimilarMovies()
  }, [id])

  useEffect(() => {
    
  },[])
  console.log(movies)
 
  return (
  
    <section className="section-details">
    {    
    <>
    <div className='movie-detail'>
            <h2>{details?.original_title}</h2>
            
            <img 
             src={`https://image.tmdb.org/t/p/w300/${details.poster_path}`} alt="movie title" />
          </div>
          <div className='container-details'>
          <i>{details?.tagline}</i>  
              <p>
                <b>Release date:</b>
              <br/>
                {details?.release_date}
                </p>
              <p>{details?.overview}</p>
              <p> 
                <b>Average rate:</b>
                <br/>
                ⭐ {Math.floor(details?.vote_average)}
                </p>
              <p>
                <b>Vote count:</b>
                <br/>
                 {details?.vote_average}
                 </p>
                 <div>
                  <h3>Trailer</h3>
                  <br/>
                  <iframe
               width="420" height="320" controls={true}
src={`https://www.youtube.com/embed/${trailer}`} >
 
            
            </iframe>
                 </div>
              <p>Genre:</p>
              <br/>
                    {details.genres?.map((item) => (
        <Genres genres={item.name} key={item.id} id={item.id}/>
      ))}
               
              
             
            </div>
            
            </>
}
        <div className='section-similar-movies'>
          <h3>Similar Movies</h3>
        
      <MovieContainer movies={ movies }/>
        </div>
   
</section>

  );

}