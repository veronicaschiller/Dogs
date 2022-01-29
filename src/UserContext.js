import React from 'react';

export const UserContext = React.createContext();

export const UserStorage = ({ children }) => {
  return <UserContext.Provider value={{usuario: 'andre'}}>{children}</UserContext.Provider>;
};
