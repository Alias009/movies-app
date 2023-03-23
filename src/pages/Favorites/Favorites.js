import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MovieContainer } from '../../components/MovieContainer/MovieContainer';
import { useStorage } from '../../context/useContext';
import './Favorite.css';

export function Favorites() {

  //hooks
  const navigate = useNavigate();
    const { favorites } = useStorage()
    // console.log(favorites)
    const handleClick = () => {
       navigate('/');
    }
  return (
    <div className='favorite-movies'>
    {favorites <= 0 ?
      <div className='empty'>
        <h3>Your List is empty</h3>
       
        <button className='back'
        onClick={handleClick}
        >Back to Home</button>
      </div> :
  <>
  <h2>Favorite Movies</h2>
<MovieContainer movies={favorites}/>
  
  </>
    }
    </div>
  )
}
