import MenuItem from "./MenuItem";
  
const MenuCategory = ({ itemCard, showIndex ,setShowIndex}) => {
    
    const cardItem = itemCard.card;
    
    const handleOnClick = () => { 
        setShowIndex() 
    }

    return <div className="menu-category rounded-t-lg border-b-8 rounded-md shadow-lg" >
        <div className="flex justify-between  cursor-pointer" onClick={handleOnClick}>
            <div className="mt-4 mx-4 font-bold ">{cardItem.title} ({cardItem.itemCards.length})</div>
            <div className="m-4">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-6 w-6">
                    <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
            </div>
        </div>
        {showIndex && 
            <MenuItem cardItem={cardItem} />
        }
        
       
    </div>
}

export default MenuCategory;