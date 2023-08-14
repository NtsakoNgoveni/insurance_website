import React, {useState} from "react";
import {images} from "../../images";
import "./header.scss";
const Header = () => {
  const [open, setOpen] = useState(false);
  function handleClick(e){
    setOpen(!open);
  }
  return <div>
    <header>
      <nav className="navbar container">
        <div className="log">
          <img src={images.logo}  alt="" />
        </div>
        <ul className={open ? 'nav-items active': 'nav-items'}>
          <li>About</li>
          <li>Contact</li>
          <li>Portfolio</li>
          <li className="btn btn--nav-btn">View Plans</li>
        </ul>
        <div className="hamburger">
          <img src={images.hamburger} alt="" onClick={handleClick}/>
        </div>
      </nav>
    </header>
  </div>;
};

export default Header;
