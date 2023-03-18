import React from 'react'
import GitHubIcon from "../../img/git-hub-icon.png";
import './Footer.css'
export function Footer() {
  return (
    <>
        <footer className="footer">
        <nav className="footer-navbar">
            <ul className="footer-navbar-ul">
                <li className="footer-navbar-li"><a href="https://github.com/jcortes009/movies-app"><img className="footer-navbar-logo" src={GitHubIcon} alt="github"/></a></li>
            </ul>
        </nav>
    </footer>
    </>
  )
}
