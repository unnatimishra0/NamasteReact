import ResturantCard from "./RestaurantCard";
import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
 const Body =()=>{

//     //Local State Variable -super powerful state variable
    const[listOfRestaurants,setListOfRestaurant]=useState([]);
    const[filteredRestaurant,setFilteredRestaurant]=useState([]);
    const[searchText,setSearchText]=useState("");

    const handleFilterTopRated = () => {
        const filteredList = listOfRestaurants.filter((res) => res.info.avgRating < 4);
        setListOfRestaurant(filteredList);
    };

    useEffect(()=>{
        fetchData();
    },[])

    const fetchData= async()=>{
        const data= await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.4843&lng=80.3325332&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );

        const json=await data.json();

        console.log(json);
        setListOfRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        console.log(listOfRestaurants);

    };
//     //conditional rendering
     if(listOfRestaurants.length===0){
    return <Shimmer/>
 }

    return (
        <div className="body">
            <div className='filter'>
                <div className="search">
                    <input type='text'
                        className="search-btn" 
                        value={searchText}
                    onChange={(e)=>{
                        setSearchText(e.target.value);
                    }}
                    />
                    <button 
                     onClick={()=>{
                        console.log("clicked");
                        const filteredRestaurant=listOfRestaurants.filter((res)=>
                        res.info.name.toLowerCase().includes(searchText.toLowerCase()));

                        setFilteredRestaurant(filteredRestaurant);
                     }}>Search</button>
                </div>
                <button className="filter-btn" onClick={handleFilterTopRated}>Top Rated Resturaunt</button>
            </div>
            <div className='res-container'>

               {
                filteredRestaurant.map((resturant)=>(
                    <ResturantCard key={resturant.info.id}resData={resturant}/>
                ))
               }
            </div>
        </div>
    )
}

export default  Body;
// const Body = () => {
//     const [listOfRestaurants, setListOfRestaurant] = useState([]);
//     const [filteredRestaurant, setFilteredRestaurant] = useState([]);
//     const [searchText, setSearchText] = useState("");

//     const handleFilterTopRated = () => {
//         const filteredList = listOfRestaurants.filter((res) => res.info.avgRating < 4);
//         setFilteredRestaurant(filteredList);
//     };

//     useEffect(() => {
//         fetchData();
//     }, []);

//     const fetchData = async () => {
//         try {
//             const data = await fetch(
//                 "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.4843&lng=80.3325332&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
//             );

//             const json = await data.json();
//             const restaurants = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
//             console.log(restaurants);
//             setListOfRestaurant(restaurants);
//             setFilteredRestaurant(restaurants);
//         } catch (error) {
//             console.error(error);
//         }
//     };

//     const handleSearch = () => {
//         const filteredRestaurant = listOfRestaurants.filter((res) =>
//             res.info.name.toLowerCase().includes(searchText.toLowerCase())
//         );
        
//         setFilteredRestaurant(filteredRestaurant);
//     };

//     return listOfRestaurants.length === 0 ? (
//         <Shimmer />
//     ) : (
//         <div className="body">
//             <div className='filter'>
//                 <div className="search">
//                     <input
//                         type='text'
//                         className="search-btn"
//                         value={searchText}
//                         onChange={(e) => {
//                             setSearchText(e.target.value);
//                         }}
//                     />
//                     <button onClick={handleSearch}>Search</button>
//                 </div>
//                 <button className="filter-btn" onClick={handleFilterTopRated}>Top Rated Restaurant</button>
//             </div>
//             <div className='res-container'>
//                 {filteredRestaurant.map((restaurant) => (
//                     <ResturantCard key={restaurant.info.id} resData={restaurant} />
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default Body;
