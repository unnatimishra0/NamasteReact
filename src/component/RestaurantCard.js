import React from "react";
import { CDN_URL } from "../utils/constant";
const ResturantCard=(props)=>{
    const {resData}=props;
    console.log(resData);
    console.log(resData.info.id);

    return(
        <div className='res-card' style={{backgroundColor:'#f0f0f0'}}>
            <img
            className='res-logo'
            alt='res-logo'
            src={CDN_URL+
            resData.info.cloudinaryImageId}
            />
            {/* <h3>{resData.info.id}</h3> */}
            <h3>{resData.info.name}</h3>
            <h3>{resData.info.cuisines.join(", ")}</h3>
            <h3>{resData.info.avgRating}</h3>
        </div>
    )
}

export default ResturantCard;