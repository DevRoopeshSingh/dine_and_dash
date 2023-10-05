import { useEffect, useState } from "react";
import { MENU_API } from "../utils/constants";

const useRestaurantMenu = (resId) => {
  const [resInfo, setRestaurantData] = useState(null);

  useEffect(() => {
    fetchRestaurantData();
  }, []);

  const fetchRestaurantData = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    setRestaurantData(json.data);
    console.log("resInfo menu", json.data);
  };

  return resInfo;
};

export default useRestaurantMenu;
