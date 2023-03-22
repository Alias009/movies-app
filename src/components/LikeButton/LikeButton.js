import React from 'react';


function LikeButton({  handleEvent, like }) {
  return (
    <>

    <button 
    onClick={handleEvent}
    className={like}>
    </button>
    
    </>
  )
}

export { LikeButton };