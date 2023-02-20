import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Genres.css'
export const Genres = ( {genres, id }) => {
    const navigate = useNavigate();
  return (
    < >
     <button onClick={() => navigate(`/genres/${id}-${genres}`, { state: { id, genres }} )}
      className="category">
        {genres}
    </button>     
</>
  )
}
