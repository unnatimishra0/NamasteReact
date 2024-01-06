// import React, { useEffect, useState } from 'react'
// import Shimmer from './Shimmer';
// const RestaurantMenu = () => {

//     const[resInfo,setResInfo]=useState();


//     useEffect(()=>{
//         fetchMenu();
//     },[])
//     useEffect(()=>{
//         console.log(resInfo);
//     },[resInfo])
//   const fetchMenu=async()=>{
//     const data=await fetch ("http://localhost:8000/data");
//     const json=await data.json();
//     console.log(json);
//     setResInfo(json);
//     console.log('hello'+resInfo);

//   }
//   return resInfo===null?(
// <Shimmer/>
//   ) :(
//     <div className='menu'>
//       <h1>hii</h1>
//     </div>
//   )
// }

// export default RestaurantMenu
