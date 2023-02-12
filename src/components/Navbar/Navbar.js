import React from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../img/movie-logo.png";
import SearchBarImg from "../../img/search-icon-color.png";
import './Navbar.css'

export function Navbar() {
const navigate = useNavigate();
const handleNavigate = () => {

  navigate('/');
}

  return (
    <header>

    <nav id="header-left">
        <img 
        onClick={handleNavigate}
        id="logo" 
        src={Logo} 
        alt="logo"
        />
    
    </nav>
    
    <section id="header-right" >
    
        {/* <!-- <select name="languages" id="lang">
            <option value="en-EN">English</option>
            <option value="es-Es">Español</option>
            <option value="zh-ZH">中文</option>
            <option value="pt-BR">Português</option>
            <option value="ru-RU">ру́сский язы́к</option>
        </select> --> */}
    
            <form id="header-search-form">
    
                    <input id="header-search-input" placeholder="Search..." type="text" autoComplete="off"/>
                    <button id="header-search-button" type="submit">
                        <img id="header-search-img" src={SearchBarImg} alt="search"/>
                    </button>                  
            
            </form>
            
    </section>
    
    
    
    </header>
  )
}
