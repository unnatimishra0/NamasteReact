 import React, { useState } from "react";
import { RES_LOGO } from "../utils/constant";
import { Link } from "react-router-dom";

 const Header =()=>{
    const[btnNameReact,setBtnNameReact]=useState("Login");

    return (
        <div className='header'>
            <div className='logo-container'>
                <img className='logo'
                 src=
                    {RES_LOGO}>
                 </img>
            </div>
            <div className='nav-items' >
                <ul>
                <li><Link to='/'>Home</Link></li>
                <li> <Link to='/about'>About us</Link></li>
                <li><Link to='/contact'>Contact us</Link></li>
                <li><Link to='/cart'>Cart</Link></li>
                <button className="login"
                onClick={()=>{
                    btnNameReact === 'Login'
                    ? setBtnNameReact("Logout"):setBtnNameReact('Login');
                }}>
                    {btnNameReact}
                </button>
                </ul>

            </div>

        </div>
    )
}

export default Header;