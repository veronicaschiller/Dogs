import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LoginCreate from './loginCreate';
import LoginForm from './loginForm';
import LoginPasswordLost from './LoginpasswordLost';
import LoginPasswordReset from './LoginPasswordReset';

const login = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginForm/>} />
        <Route path="criar" elemente={<LoginCreate />} />
        <Route path="Esqueceu" elemente={<LoginPasswordLost />} />
        <Route path="reset" elemente={<LoginPasswordReset />} />
      </Routes>
    </div>
  );
};

export default login;
