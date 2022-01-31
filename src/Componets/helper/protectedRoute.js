import React from 'react';
import { UserContext } from '../../UserContext';
import { Navigate } from 'react-router-dom';

const protectedRoute = () => {
  const { login } = React.userContext(UserContext);
  return login ? <div></div> : <Navigate to="login/" />;
};

export default protectedRoute;
