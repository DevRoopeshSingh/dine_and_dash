const OfflineAlert = () => {
  return (
    <div className="offline-alert flex justify-center items-center flex-col bg-slate-600 m-4 p-4 text-white">
      <h1> ⚠️ Connection Error</h1>

      <h2>You are offline please check your internet connection !!! </h2>
    </div>
  );
};

export default OfflineAlert;
