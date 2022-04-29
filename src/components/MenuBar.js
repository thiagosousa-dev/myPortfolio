import React from "react";
import { Link, useLocation } from "react-router-dom";

function Header({name, icon, path}) {
  const { pathname } = useLocation();
  return ( 
    <Link
      type="button"
      to={path}
      className={`nav-bar ${ pathname === path && 'active' }`}
    >
      <img src={ icon } alt="icon" className="icon-nav"/>
      <p>{ name }</p>
    </Link>
  );
}

export default Header;