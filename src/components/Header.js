import React from "react";
import '../styles/Header.css';
import MenuBar from "../components/MenuBar";
import react_icon from '../images/react_icon.svg'
import js_icon from '../images/js_icon.svg'
import html_icon from '../images/html_icon.svg'
import css_icon from '../images/css_icon.svg'

function Header() {
  return ( 
    <header className="header-container">
      <nav className="nav-container">
        <MenuBar 
          icon={ react_icon }
          name='home.jsx'
          path="/"
        /> 
        <MenuBar 
          icon={ html_icon }
          name='about.html'
          path="/about"
        />
        <MenuBar 
          icon={ js_icon }
          name='projects.js'
          path="/projects"
        />
        <MenuBar 
          icon={ css_icon }
          name='contact.css'
          path="/contact"
        /> 
      </nav>
    </header>
  );
}

export default Header;