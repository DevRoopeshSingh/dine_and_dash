import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import useGeoLocation from "../utils/useGeoLocation";
import { useSelector } from "react-redux";
const Logo = new URL("../../assets/logo-white.svg", import.meta.url);

export const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  //const location = useGeoLocation();
  //console.log("location", location);

  // If no dependency array then it will called on every render
  // If dependency array is empty then useEffect is called on initial render just once for the first time
  // If dependency array is not empty and it has (btnName) so whenever value changes useEffect will be called
  useEffect(() => {
    console.log("useEffect called onload in Header Component");
  }, [btnName]);


  const cartItems =  useSelector((store)=> store.cart.items)
  console.log("cart items",cartItems)

  return (
    <div className="flex justify-between m-8 p-4 bg-slate-100 ">
      <div className="flex items-center">
        <div id="logo-container">
          <Link to="/">
            <img className="logo w-[100] rounded-xl" src={Logo} alt="Dine and Dash" />
          </Link>
        </div>
        <div className="mx-4">
          <span>Bengaluru, Karnataka 560037, India</span>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <ul className="flex space-x-6">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            {/* <a href="/About">About us</a> */}
            <Link to="/About">About</Link>
          </li>
          <li>
            <Link to="/Contact"> Contact Us</Link>
          </li>
          <li>
            <Link to="/Grocery">Grocery</Link>
          </li>
          <li className="px-4 font-bold text-xl ">
           <Link to="/Cart" >Cart-({cartItems.length} items)</Link>
          </li>
          <button
            className="login"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
