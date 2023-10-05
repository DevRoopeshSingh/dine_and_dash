import { useState, useEffect } from "react";
import RestaurantCard, { withOfferRestaurantCard} from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { RESTAURANT_LIST_API } from "../utils/constants";
import OfferContainer from "./OfferContainer";



const BodyComponent = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [bannerList, setBannerList] = useState([]);
  const RestaurantCardOffer = withOfferRestaurantCard(RestaurantCard)
  

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RESTAURANT_LIST_API);
    const json = await data.json();
    console.log("Json Data", json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setRestaurantList(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    setBannerList(
      json?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info
    );
  };

  return restaurantList?.length === 0 ? (
    <Shimmer />
  ) : (
    <div id="body-container" className="body">
      <div className="m-8 filter flex justify-end items-center">
        <div className="search">
          <input
            type="text"
            className="search-box border-solid border-2 rounded-md p-1 m-2"
            onChange={(ev) => setSearchText(ev.target.value)}
            value={searchText}
          ></input>
          <button
            className="mx-4 my-2 px-4 py-1 bg-orange-200 rounded-md"
            onClick={() => {
              const filterRestaurantList = restaurantList.filter((rest) =>
                rest.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              console.log(filterRestaurantList);
              setFilteredRestaurant(filterRestaurantList);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn ml-2  px-4 py-1 bg-gray-400 rounded-md"
          onClick={() => {
            const filterList = restaurantList.filter(
              (rest) => rest.info.avgRating > 4.2
            );
            setFilteredRestaurant(filterList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <OfferContainer banners={bannerList} />

      <div className="restaurant-container">
        <div className="flex mx-4 px-6 text-xl">
          <h1>Top restaurant chains in Bangalore</h1>
        </div>
        <div className=" flex p-4 space-x-4 overflow-x-scroll">
          {filteredRestaurant?.map((restaurant) => (
            <Link
              to={"/restaurants/" + restaurant.info.id}
              key={restaurant.info.id}
            >
              {
                restaurant.info.aggregatedDiscountInfoV3?.header ?
                  <RestaurantCardOffer resData={restaurant} offerText={restaurant.info.aggregatedDiscountInfoV3?.header} />
                 
                :
                 <RestaurantCard resData={restaurant} /> 
                
              }
              
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BodyComponent;
