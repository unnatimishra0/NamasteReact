import React, { useEffect, useState } from 'react'
import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
import useRestaurantMenu from "../utils/useRestaurantMenu"
const RestaurantMenu = () => {

    const {resId}=useParams();
    //creating a custom hook which accepts resId and gives the resInfo data
    const resInfo=useRestaurantMenu(resId);

  
  if (resInfo === null)   return <Shimmer/>
  
  const{name, cuisines, costForTwoMessage }=resInfo?.cards[0]?.card?.card?.info || {};
  
  const{itemCards}=resInfo.cards[2].groupedCard.cardGroupMap.REGULAR.cards[5].card.card;
  console.log(itemCards);

  
  return  (
    <div className='menu'>
      <h1>{name}</h1>
      <h1>{cuisines.join(",")}</h1>
      <p>{costForTwoMessage}</p>
      {itemCards.map((item) =>( 
          <li key={id}>
              {item.card.info.name} - {" Rs "}{item.card.info.price/100|| item.card.info.deafultprice/100}
          </li> ))}
    

    </div> 
  )
}

export default RestaurantMenu
