import React from "react";
import logo from "./../assets/images/logo.png";
import "./../assets/css/header.css";
const Header=()=>{
  return (
    <header>
        <img className="logo" src={logo} alt=""/>
    </header>
  )
}
export default Header;