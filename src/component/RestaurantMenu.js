import React, { useEffect, useState } from 'react'
import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
import useRestaurantMenu from "../utils/useRestaurantMenu"
import RestaurantCategory from './RestaurantCategory';
const RestaurantMenu = () => {

    const {resId}=useParams();
    //creating a custom hook which accepts resId and gives the resInfo data
    const resInfo=useRestaurantMenu(resId);
//lifting state up
    const[showIndex,setShowIndex]=useState(null);
  
  if (resInfo === null)   return <Shimmer/>
  
  const{name, cuisines, costForTwoMessage }=resInfo?.cards[0]?.card?.card?.info || {};
  
  // const{itemCards}=resInfo.cards[2].groupedCard.cardGroupMap.REGULAR.cards[7].card.card;
  // console.log(itemCards);

  console.log(resInfo.cards[2].groupedCard.cardGroupMap.REGULAR.cards);

  const categories =
  resInfo.cards[2].groupedCard.cardGroupMap.REGULAR.cards
  .filter(c=>c?.card?.card?.["@type"]=== "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
  console.log(categories);

  
  return  (
    <div className='text-center'>
      <h1 className='font-bold my-6 text-2xl'>{name}</h1>
      <h1 className='font-bold text-lg'>{cuisines.join(",")}</h1>
      {/* <p>{costForTwoMessage}</p> */}
      {/* {categories accordians} */}
      {categories.map((category,index)=>(
        <li>
          {/* {controlled component} */}
          <RestaurantCategory 
          key={category?.card?.card?.title} 
          data={category?.card?.card}
          // {lifting state up}
          showItems={index ===showIndex? true:false}
          setShowIndex={()=> setShowIndex(index)}/>

        </li>
      ))}

     

    </div> 
  )
}

export default RestaurantMenu
