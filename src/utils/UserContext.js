import { createContext } from "react";

const UserContext = createContext({
  loggedInUser: "Demo User",
});

export default UserContext;
