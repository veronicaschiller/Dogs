import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LoginCreate from './loginCreate';
import LoginForm from './loginForm';
import LoginPasswordLost from './LoginpasswordLost';
import LoginPasswordReset from './LoginPasswordReset';
import Styles from './login.module.css';

//import { UserContext } from '../../userContext';

const login = () => {
  //const {login} =  React.userContext(UserContext);
  // if(login === true) return <Navigate to='/conta'/>
  return (
    <section className={Styles.login}>
      <div className={Styles.forms}>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="criar" element={<LoginCreate/>} />
          <Route path="Esqueceu" elemente={<LoginPasswordLost />} />
          <Route path="reset" elemente={<LoginPasswordReset />} />
        </Routes>
      </div>
    </section>
  );
};

export default login;
