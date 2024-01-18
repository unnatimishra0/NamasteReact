import React, { useState } from "react";
import ItemList from "./ItemList";
//passing the showindex and showitems from res menu component to this as props
const RestaurantCategory = ({ data ,showItems,setShowIndex}) => {
  // console.log(data)

  const handleClick=()=>{

    setShowIndex();
  }
  return (
    <div>
      {/* { accordian header} */}
      <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 ">
        <div className="flex justify-between cursor-pointer" onClick={handleClick}>
          <span className="font-bold text-lg">
            {data.title} ({data.itemCards.length})
          </span>
          <span>⬇️</span>
        </div>
        {  showItems &&  <  ItemList items={data.itemCards} />}
      </div>
      {/* { accordian body} */}
    </div>
  );
};
export default RestaurantCategory;
