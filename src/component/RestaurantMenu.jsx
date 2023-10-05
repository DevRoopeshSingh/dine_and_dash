import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import MenuCard from "./MenuCard";
import MenuCategory from "./MenuCategory";
import UserContext from "../utils/UserContext";
import { useState,useContext } from "react";


const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  const [showIndex, setShowIndex] = useState(0);
  const { loggedInUser} = useContext(UserContext);
  console.log("Context data",loggedInUser)


  if (resInfo === null) {
    return <Shimmer />;
  }

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;

  
  const itemsCards =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
      ?.itemCards ||
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
      .categories[0].itemCards;

  const ItemCategory = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards.filter(({ card }) => { return card.card["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"});

  console.log("Categories info", ItemCategory);

  return (
    <div className="menu flex justify-center flex-col items-center ">
      <div className="bg-gray-100 w-9/12 m-5 p-2 text-center">
        <div>
          <h1>{name}</h1>
        </div>
        <div>
          { (`${cuisines.join(", ")} - ${costForTwoMessage}`) }
        </div>  
      </div>
      <div className=" w-9/12">
        {
          ItemCategory.map(({ card }, index) => { 
            return <MenuCategory
              itemCard={card}
              key={card.card.title}
              showIndex={index === showIndex ? true : false}
              setShowIndex={ ()=> setShowIndex(index === showIndex ? null:index)}
            />
          })
        }
      </div>
    </div>
  );
};

export default RestaurantMenu;
