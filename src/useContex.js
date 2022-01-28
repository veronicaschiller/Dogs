import React from 'react';

export const userContext = React.createContext();

export const UserStorege = ({ children }) => {
  return (
    <userContext.Provider value={{ Usuario: 'verônica' }}>
      {children}
    </userContext.Provider>
  );
};
