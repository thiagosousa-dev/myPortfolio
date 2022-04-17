import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import myContext from "../context/AppContext";

function Header() {
  const navigate = useNavigate();
  const { selectedPage, setSelectedPage } = useContext(myContext)
  const selectPage = ({target: {name}}) => {
    setSelectedPage(name)
    navigate(`/${name}`);
  }
  return ( 
    <header>
      <nav>
        <button
          type="button"
          name=""
          className={selectedPage === '' ? 'nav-bar active' : 'nav-bar'}
          onClick={selectPage}
        >
          Home
        </button>
        <button
          type="button"
          name="about"
          className={selectedPage === 'about' ? 'nav-bar active' : 'nav-bar'}
          onClick={selectPage}
        >
          About
        </button>
        <button
          type="button"
          name="projects"
          className={selectedPage === 'projects' ? 'nav-bar active' : 'nav-bar'}
          onClick={selectPage}
        >
          Projects
        </button>
        <button
          type="button"
          name="contact"
          className={selectedPage === 'contact' ? 'nav-bar active' : 'nav-bar'}
          onClick={selectPage}
        >
          Contact
        </button>
      </nav>
    </header>
  );
}

export default Header;