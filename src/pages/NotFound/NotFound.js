import React from "react";
import { useNavigate } from "react-router-dom";
import "./NotFound.css";

export function NotFound() {
  //hook
  const navigate = useNavigate();

  function handleClick (){
    navigate("/");
  };
  return (
    <div className="not-found-container">
      <div className="not-found">
        <h3>Seems you are Lost</h3>

        <div className="not-found-image">
          <button className="not-found-button" onClick={handleClick}>
            Home Page
          </button>
        </div>
      </div>
    </div>
  );
}
