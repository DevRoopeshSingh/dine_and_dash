const MenuCard = ({ card }) => {
  const { info } = card;
  return (
    <div className="menu-card m-2 p-2">
      {/* <li key={info.id}>
        {info.name} - ₹{info.defaultPrice || info.price / 100}
      </li> */}
      <div className="style-container">
        <div className="style-item flex justify-between border-2  bg-slate-150 items-center">
          <div className="style-details-container p-2">
            <div className="style-item-name">
              <h3>{info.name}</h3>
            </div>
            <div className="style-item-price">
              <span>₹{(info.defaultPrice || info.price) / 100}</span>
            </div>
            <div className="style-item-desc text-sm mt-5 text-gray-600">
              <p>{info.description}</p>
            </div>
          </div>
          <div className="style-image-container">
            <img
              className="rounded-lg"
              src={
                "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/" +
                info.imageId
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
