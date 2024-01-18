import React from "react";
import { CDN_URL } from "../utils/constant";
const ResturantCard=(props)=>{
    const {resData}=props;
    console.log(resData);

    const{
        cloudinaryImageId,
        name,
        avgRating,
        cuisines,
        costForTwo,
        deliveryTime,
    }=resData.info;
    console.log(resData);
    // console.log(resData.info.id);

    return(
        <div 
        data-testid="resCard"
        className='m-4 p-4 w-64 bg-gray-100 shadow-md rounded-md  hover:bg-gray-400' >
            <img
            className='rounded-lg'
            alt='res-logo'
            src={CDN_URL+
            cloudinaryImageId}
            />
            {/* <h3>{resData.info.id}</h3> */}
            <h3 className="font-bold py-4 text-lg">{name}</h3>
            <h3>{cuisines.join(", ")}</h3>
            <h3>{costForTwo}</h3>
            <h3>{deliveryTime}</h3>
            <h3>{avgRating}</h3>

           

        </div>
    )
}
//higher order component
export const withPromotedList =(RestaurantCard)=>{
    return (props)=>{
        return(
           <div>
            <label className="absolute bg-black text-white m-2 p-2 rounded-lg"> Promoted</label>
            <RestaurantCard {...props}/>
           </div>
        )
    }
}

export default ResturantCard;