import { createContext, useState } from "react";

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [admin, setAdmin] = useState(() => {
    const storedAdmin = localStorage.getItem("admin");

    return storedAdmin ? JSON.parse(storedAdmin) : null;
  });

  return (
    <AppContext.Provider
      value={{
        admin,
        setAdmin,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
