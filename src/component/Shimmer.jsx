const Shimmer = () => {
  const loopArray = Array.from({ length: 40 }, (_, index) => index);
  return (
    <div className="shimmer-container flex justify-center flex-wrap m-20 p-10">
      {loopArray.map((indx) => {
        return (
          <div key={indx} className="shimmer-card m-5 p-2 w-32 h-60 bg-gray-100 rounded-2xl"></div>
        );
      })}
    </div>
  );
};

export default Shimmer;
