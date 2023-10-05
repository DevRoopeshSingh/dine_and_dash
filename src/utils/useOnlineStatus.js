import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  const [isOnlineStatus, setIsOnline] = useState(true);

  useEffect(() => {
    const offline = window.addEventListener("offline", () => {
      setIsOnline(false);
    });

    const online = window.addEventListener("online", () => {
      setIsOnline(true);
    });

    return () => {
      window.removeEventListener("offline", offline);
      window.removeEventListener("online", online);
    };
  }, []);

  return isOnlineStatus;
};

export default useOnlineStatus;
