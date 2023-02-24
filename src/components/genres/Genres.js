import React from 'react'
import { Link } from 'react-router-dom'
import './Genres.css'
export const Genres = ( {genres, id }) => {
 
  return (
    < >
     <Link to={`/genres/${id}-${genres}`}
      className="category">
        {genres}
    </Link>     
</>
  )
}
