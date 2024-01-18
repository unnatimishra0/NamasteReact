import ResturantCard, { withPromotedList } from "./RestaurantCard";
import React, { useEffect, useState,useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  const handleFilterTopRated = () => {
    const filteredList = listOfRestaurants.filter(
      (res) => res.info.avgRating < 4
    );
    setFilteredRestaurant(filteredList);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.4843&lng=80.3325332&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );

      const json = await data.json();
      console.log(json);
      const restaurants =
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants || [];
      console.log(restaurants);
      setListOfRestaurant(restaurants);
      setFilteredRestaurant(restaurants);
      console.log(listOfRestaurants);
    } catch (error) {
      console.error(error);
    }
  };
  //use of custom hook
  const onlineStatus = useOnlineStatus();
  //use of higher order component
  const RestaurantCardPromoted = withPromotedList(ResturantCard);

  if (onlineStatus === false) {
    return (
      <h1>
        Looks like you are offline ...Please Check your Internet Connection
      </h1>
    );
  }

  const{loggedInUser,setUserName}=useContext(UserContext);

  const handleSearch = () => {
    const filteredRestaurant = listOfRestaurants.filter((res) =>
      res.info.name.toLowerCase().includes(searchText.toLowerCase())
    );

    setFilteredRestaurant(filteredRestaurant);
  };

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex ">
        <div className="search m-4 p-4">
          <input
            type="text"
            //to test input box by getByTestId
            data-testid="searchInput"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className=" px-4 py-2 bg-green-100 m-4 rounded-lg"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
        <div 
        
        className="search m-4 p-4 flex item-center">
          <button
            className="px-4 py-2 bg-green-100 m-4 rounded-lg"
            onClick={handleFilterTopRated}
          >
            Top Rated Restaurant
          </button>
          <div>
            <label>Username :</label>
            <input  type='text 'className="border border-black p-2" 
            value={loggedInUser}
            onChange={(e)=> setUserName(e.target.value)}/>
          </div>
        </div>
      </div>
      <div className=" flex flex-wrap">
        {filteredRestaurant.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            {
              // {use of higher order component}
              restaurant.info.sla ? (
                <RestaurantCardPromoted resData={restaurant} />
              ) : (
                <ResturantCard resData={restaurant} />
              )
            }
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
