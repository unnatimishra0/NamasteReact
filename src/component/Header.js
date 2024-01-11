 import React, { useState } from "react";
import { RES_LOGO } from "../utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

 const Header =()=>{
    const[btnNameReact,setBtnNameReact]=useState("Login");
    const onlineStatus=useOnlineStatus();

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
                    {/* {to get the emoji press windows+.} */}
                <li>Online Status:{onlineStatus ? '✅':'🔴'}</li>
                <li><Link to='/'>Home</Link></li>
                <li> <Link to='/about'>About us</Link></li>
                <li><Link to='/contact'>Contact us</Link></li>
                <li><Link to='/cart'>Cart</Link></li>
                <li><Link to='/grocery'>Grocery</Link></li>
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