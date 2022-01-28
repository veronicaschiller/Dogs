import React from "react";
import Header from './Componets/header'
import Footer from './Componets/footer'
import Home from './Componets/home'
import Login from './Componets/login/login'
import { UserStorege } from "./useContex";

import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";



function App() {
  
  return <div>
    <BrowserRouter>
    <UserStorege>
  <Header />
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/login/*'element={<Login />} />
  </Routes>
  <Footer />
    </UserStorege>
    </BrowserRouter>
     </div>
}

export default App;
