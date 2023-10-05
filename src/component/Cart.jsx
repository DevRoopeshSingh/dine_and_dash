import { useDispatch, useSelector } from "react-redux";
import MenuItem  from "./MenuItem";
import { clearCart } from "../utils/cartSlice";

const Card = () => {

  const cardItem = {
      itemCards:[]
  }

    const dispatch = useDispatch();
  
    const cartItems =  useSelector((store)=> store.cart.items);
    
    const itemWithCard = cartItems.map((item)=>({
      card:item
    }));

    cardItem.itemCards.push(...itemWithCard)

    const handleClearCart = () =>{
      dispatch(clearCart());
    }
  
  return (
    <div className="text-center m-4 p-4 flex justify-center flex-col">
        <div className="flex justify-center gap-5 mb-5">
          <h1 className="text-2xl font-bold border-b-2 border-black uppercase">Cart Items</h1>
          {cardItem.itemCards.length >0  && <button className="p-2  bg-black text-white rounded-lg ml-20" onClick={handleClearCart}> Clear cart</button>}
        </div>   
       <div className="w-6/12 m-auto">
        {cardItem.itemCards.length === 0 && (
          <h1>Cart is empty. Add Items to the card! </h1>
        )}
          <MenuItem  cardItem={cardItem} />
       </div>
      
    </div>
  );
};

export default Card;
