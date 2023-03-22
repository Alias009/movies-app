import React from 'react';
import './LikeButton.css';

function LikeButton({  handleEvent, like }) {
  return (
    <>
    { 
    <button 
    onClick={handleEvent}
    className={like}>
    </button>
    }
    </>
  )
}

export { LikeButton };