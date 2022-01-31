import React from 'react';

const erro = ({erro}) => {
  if (!erro) return null;
  return <p style={{color: '#f31' , margin:'1rem 0'}}>{erro}</p>;
};

export default erro;
