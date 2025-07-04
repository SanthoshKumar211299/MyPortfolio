import React, { useRef, useState } from 'react'
import './Navbar.css'
import logo from "../../assets/Santhosh.png"
import underline_logo from '../../assets/nav_underline.svg'
import AnchorLink from "react-anchor-link-smooth-scroll"
import menu_open from "../../assets/menu_open.svg"
import menu_close from "../../assets/menu_close.svg"
const Navbar = () => {
  const [menu,setMenu] =useState("home");
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right="0";
  }
  const closeMenu = () => {
    menuRef.current.style.right='-350px';
  }
    return (
      <div className="navbar" id="navbar">
        <img src={logo} alt="" />
        <img
          src={menu_open}
          onClick={openMenu}
          alt=""
          className="nav-mob-open"
        />
        <ul ref={menuRef} className="nav-menu">
          <img
            src={menu_close}
            onClick={closeMenu}
            alt=""
            className="nav-mob-close"
          />
          <li>
            <AnchorLink className="anchor-link" href="#home">
              <p onClick={() => setMenu("home")}>Home</p>
            </AnchorLink>
            {menu === "home" ? <img src={underline_logo} alt="" /> : <></>}
          </li>
          <li>
            <AnchorLink className="anchor-link" offset={50} href="#about">
              <p onClick={() => setMenu("about")}>About</p>
            </AnchorLink>
            {menu === "about" ? <img src={underline_logo} alt="" /> : <></>}
          </li>

          <li>
            <AnchorLink className="anchor-link" offset={50} href="#work">
              <p onClick={() => setMenu("work")}>Portfolio</p>
            </AnchorLink>
            {menu === "work" ? <img src={underline_logo} alt="" /> : <></>}
          </li>
          
        </ul>
        <div className="nav-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect with Me
          </AnchorLink>
        </div>
      </div>
    );
}

export default Navbar
