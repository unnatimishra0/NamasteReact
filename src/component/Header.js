 import React, { useContext, useState } from "react";
import { RES_LOGO } from "../utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { UseSelector, useSelector } from "react-redux";

 const Header =()=>{
    const[btnNameReact,setBtnNameReact]=useState("Login");
    const onlineStatus=useOnlineStatus();
    const loggedInUser =useContext(UserContext);
    //console.log(loggedInUser);

    // subscribing to the store using a selector
    const cartItems=useSelector((store)=> store.cart.items)

    return (
        <div className='flex justify-between bg-pink-100 shadow-lg '>
            <div className='logo-container'>
                <img className='w-20 h-20 px-5 py-5 rounded-full border border-gray-300 shadow-md'
                 src=
                    {RES_LOGO}>
                 </img>
            </div>
            <div className='flex items-center' >
                <ul className="flex p-4 m-4">
                    {/* {to get the emoji press windows+.} */}
                <li className="px-4">Online Status:{onlineStatus ? '✅':'🔴'}</li>
                <li className="px-4"><Link to='/'>Home</Link></li>
                <li className="px-4"> <Link to='/about'>About us</Link></li>
                <li className="px-4"><Link to='/contact'>Contact us</Link></li>
                <li className="px-4 font-bold text-xl"><Link to='/cart'>
                    Cart {cartItems.length}</Link></li>
                <li className="px-4"><Link to='/grocery'>Grocery</Link></li>
                <button className="login"
                onClick={()=>{
                    btnNameReact === 'Login'
                    ? setBtnNameReact("Logout")
                    :setBtnNameReact('Login');
                }}>
                    {btnNameReact}
                </button>
                <li className="px-4 font-bold">{loggedInUser.loggedInUser}</li>
                </ul>

            </div>

        </div>
    )
}

export default Header;