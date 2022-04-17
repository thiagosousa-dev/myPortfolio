import React from "react";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const selectPage = ({target: {name}}) => {
    navigate(`/${name}`);
  }
  return ( 
    <header>
      <nav>
        <button
          type="button"
          name=""
          onClick={selectPage}
        >
          Home
        </button>
        <button
          type="button"
          name="about"
          onClick={selectPage}
        >
          About
        </button>
        <button
          type="button"
          name="projects"
          onClick={selectPage}
        >
          Projects
        </button>
      </nav>
      <button
          type="button"
          name="contact"
          onClick={selectPage}
        >
          Contact
        </button>
    </header>
  );
}

export default Header;