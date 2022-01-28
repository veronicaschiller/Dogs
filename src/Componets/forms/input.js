import React from 'react';
import Styles from './input.module.css';

const input = ({ label, type, name, value, onChange, erro, onBlur }) => {
  return (
    <div className={Styles.wrapper}>
      <label htmlFor={name} className={Styles.label}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        className={Styles.input}
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
    
      />
      {erro &&<p className={Styles.error}>{erro}</p>}
    </div>
  );
};

export default input;
