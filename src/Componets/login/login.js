import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LoginPasswordReset from './loginPasswordReset';
import LoginPasswordLost from './loginPasswordLost';
import LoginCreat from './loginCreat';
import LoginForm from './loginForm';

const login = () => {
  return (
    <div>
      <Routes>
        <Route to="/" element={<LoginForm />} />
        <Route path="criar" element={<LoginCreat />} />
        <Route path="perdeu" element={<LoginPasswordLost />} />
        <Route path="resetar" element={<LoginPasswordReset />} />
      </Routes>
    </div>
  );
};

export default login;
