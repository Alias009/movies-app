import React from 'react';


 export function LikeButton({  handleEvent, like }) {
  return (
    <>

    <button 
    onClick={handleEvent}
    className={like}>
    </button>
    
    </>
  )
}
