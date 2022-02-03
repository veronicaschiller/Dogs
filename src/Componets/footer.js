import React from 'react';
import Styles from './footer.module.css';
import {ReactComponent as Dogs} from '../Assets/dog.svg'

const footer = () => {
  return <footer className={Styles.footer}>
    <Dogs/>
    <p>Dogs. alguns direitos reservados</p>
  </footer>;
};

export default footer;
