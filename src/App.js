import React from 'react';
import Header from './Componets/header';
import Footer from './Componets/footer';
import Home from './Componets/home';
import Login from './Componets/login/login';
//import User from './Componets/user/user'
//import {UserStorage} from './UserContext'
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProtectedRoute from './Componets/helper/protectedRoute';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login/*" element={<Login />} />
          <Route path="conta/*" element={<ProtectedRoute />} />
          </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
