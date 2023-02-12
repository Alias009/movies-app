import React from 'react'
import GitHubIcon from "../../img/git-hub-icon.png";
import './Footer.css'
export function Footer() {
  return (
    <>
        <footer id="footer">
        <nav id="footer-navbar">
            <ul id="footer-navbar-ul">
                <li className="footer-navbar-li"><a href="https://github.com/jcortes009/movies-app"><img class="footer-navbar-logo" src={GitHubIcon} alt="github"/></a></li>
            </ul>
        </nav>
    </footer>
    </>
  )
}
