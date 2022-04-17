import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import myContext from "../context/AppContext";
import '../styles/Header.css';

function Header() {
  const navigate = useNavigate();
  const { selectedPage, setSelectedPage } = useContext(myContext)
  const selectPage = ({target: {name}}) => {
    setSelectedPage(name)
    navigate(`/${name}`);
  }
  return ( 
    <header className="header-container">
      <nav>
        <button
          type="button"
          name=""
          className={selectedPage === '' ? 'nav-bar active' : 'nav-bar'}
          onClick={selectPage}
        >
          home.jsx
        </button>
        <button
          type="button"
          name="about"
          className={selectedPage === 'about' ? 'nav-bar active' : 'nav-bar'}
          onClick={selectPage}
        >
          about.html
        </button>
        <button
          type="button"
          name="projects"
          className={selectedPage === 'projects' ? 'nav-bar active' : 'nav-bar'}
          onClick={selectPage}
        >
          projects.js
        </button>
        <button
          type="button"
          name="contact"
          className={selectedPage === 'contact' ? 'nav-bar active' : 'nav-bar'}
          onClick={selectPage}
        >
          contact.css
        </button>
      </nav>
    </header>
  );
}

export default Header;