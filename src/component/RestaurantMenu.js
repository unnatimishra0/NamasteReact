import React, { useEffect, useState } from 'react'
import Shimmer from './Shimmer';
const RestaurantMenu = () => {

    const[resInfo,setResInfo]=useState(null);


    useEffect(()=>{
        fetchMenu();
    },[])
    // useEffect(()=>{
    //     console.log(resInfo);
    // },[resInfo])
  const fetchMenu=async()=>{
    const data=await fetch ("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.4843&lng=80.3325332&restaurantId=74509&catalog_qa=undefined&submitAction=ENTER");
    // const data=await fetch ("http://localhost:8000/data");
    const json=await data.json();
    console.log(json);
    setResInfo(json.data);
    // console.log('hello'+resInfo);
  };
  // const {name}=resInfo?.cards[0]?.card?.card?.info;
  // console.log(name);

  // if (resInfo===null){
  //   <Shimmer/>
  // }

  return resInfo===null?(
    <Shimmer/>
  ) :(
    <div className='menu'>
      {/* <h1>{name}</h1> */}
  
      <h1>{resInfo.cards[0].card.card.info.name}</h1>
    </div> 
  )
}

export default RestaurantMenu
