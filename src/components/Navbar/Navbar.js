import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../img/movie-logo.png";
import SearchBarImg from "../../img/search-icon-color.png";
import './Navbar.css'

export function Navbar() {
const navigate = useNavigate();
const [inputValue, setInputValue] = useState('');
const handleNavigate = () => {

  navigate('/');
}

const handleSubmit = () => {

//  navigate('/search/' + inputValue, { state: { inputValue}})
 console.log(inputValue)
}
  return (
    <header>

    <nav className="header-left">
        <img 
        onClick={handleNavigate}
        className="logo" 
        src={Logo} 
        alt="logo"
        />
    
    </nav>
    
    <section className="header-right" >
    
        {/* <!-- <select name="languages" className="lang">
            <option value="en-EN">English</option>
            <option value="es-Es">Español</option>
            <option value="zh-ZH">中文</option>
            <option value="pt-BR">Português</option>
            <option value="ru-RU">ру́сский язы́к</option>
        </select> --> */}
    
            <form className="header-search-form">
    
                    <input onChange={(event) => setInputValue(event.value)}
                    className="header-search-input" placeholder="Search..." type="text" autoComplete="off"/>
                    <button onSubmit={handleSubmit}
                    className="header-search-button" type="submit">
                        <img className="header-search-img" src={SearchBarImg} alt="search"/>
                    </button>                  
            
            </form>
            
    </section>
    
    
    
    </header>
  )
}
