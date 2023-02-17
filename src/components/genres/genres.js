import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Genres = ( {genres, id }) => {
    const navigate = useNavigate();
  return (
    <div className="categories-container-section">
     <span onClick={() => navigate('/genres/'+ id)}
      className="category">
        {genres}
    </span>     
</div>
  )
}
