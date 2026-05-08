import { createContext, useState, useEffect } from "react";

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  // USER STATE
  const [user, setUser] = useState(null);

  // LOAD USER
  useEffect(() => {
    const token = localStorage.getItem("token");

    const storedUser = localStorage.getItem("user");

    // IF TOKEN & USER EXISTS
    if (token && storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (error) {
        console.log(error);

        localStorage.removeItem("user");

        localStorage.removeItem("token");

        localStorage.removeItem("userId");
      }
    }
  }, []);

  return (
    <AppContext.Provider
      value={{
        user,
        setUser,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
