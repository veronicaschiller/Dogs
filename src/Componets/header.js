import React from 'react';
import { Link } from 'react-router-dom';
import Styles from './header.module.css';
import { ReactComponent as Dogs } from '../Assets/dog.svg';
//import { UserContext } from '../UserContext';

const header = () => {
  //const usuario = React.UserContext(UserContext);
 // console.log(usuario)
//const {data} = React.UserContext(UserContext);

  return (
    <header className={Styles.header}>
      <nav className={`${Styles.nav} Container`}>
        <Link className={Styles.logo} to="/" aria-label="Dogs - Home">
          <Dogs />
        </Link>
       
        <Link className={Styles.Login} to="/login">
          
          Login / Criar
        </Link>
      </nav>
    </header>
  );
};

export default header;
