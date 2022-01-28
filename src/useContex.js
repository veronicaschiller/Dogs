import react from 'react';

const userContext = react.createContext();

export const UserStorege = ({ children }) => {
  return (
    <userContext.Provider value={{ usuario: 'verônica' }}>
      {children}
    </userContext.Provider>
  );
};
