import { useContext } from "react";
import myContext from "../context/AppContext";

function MenuMobile() {
  const {activeSideBar, setActiveSideBar} = useContext(myContext)
  return ( 
    <button type="button" className="hamburger-menu" onClick={ () => setActiveSideBar(!activeSideBar) }>
      <div className={`line-1 ${activeSideBar && 'active'}`}></div>
      <div className={`line-2 ${activeSideBar && 'active'}`}></div>
      <div className={`line-3 ${activeSideBar && 'active'}`}></div>
    </button> 
  );
}

export default MenuMobile;