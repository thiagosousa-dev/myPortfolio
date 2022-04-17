import React from "react";
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import '../styles/Footer.css';

function Footer() {
  return ( 
    <footer className="footer-container">
      <div className="links-footer">
        <p>Find me in:</p>
        <a href="https://www.linkedin.com/in/thiagodanobrega/" 
          target="_blank" 
          className="icon-container" 
          rel="noreferrer"
        >
          <BsLinkedin className="icon-footer"/>
        </a>
        <a href="https://github.com/thiagodanobrega" 
          target="_blank" 
          className="icon-container" 
          rel="noreferrer"
        >
          <BsGithub className="icon-footer"/>
        </a>
      </div>
      <p className="text-footer">Developed with ❤ by Thiago Nóbrega</p>
    </footer>
  );
}

export default Footer;