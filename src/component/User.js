import React from 'react'
import { useState } from 'react';
// using props of like this which is defined in about.js
const User =({name})=>{
    //defining  a state
    const[count]=useState(0);
    const[count2]=useState(1);

    return <div className="user-card">
        <h1></h1>
        {/* {using a state} */}
        <h1>Count={count}</h1>
        <h1>Count2={count2}</h1>

        {/* {using props} */}
        <h2>Name {name}</h2>
        <h2> Location :kanpur</h2>
        <h1>Contact unnatimishra19@gmail.com</h1>

    </div>
}
export default User;