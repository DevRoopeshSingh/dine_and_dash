
const OfferContainer = ({ banners }) => {
  console.log("Logs prop banner", banners);
  return (
    <div>
      <div className="best-offers-container mx-4">
        <div className="mx-4 p-2 text-xl">
          <h1>Best offers for you</h1>
        </div>
        <div className="best-row flex mx-4 overflow-x-hidden overflow-y-auto">
          {banners.map(({ id, imageId, action, accessibility }) => {
            return (
              <div key={id} className="cursor-pointer">
                <a>
                  <img
                    className="m-2 p-1"
                    src={
                      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/" +
                      imageId
                    }
                    alt={accessibility.altText}
                  />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default OfferContainer;




