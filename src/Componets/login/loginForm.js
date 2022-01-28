import React from 'react';
import { Link } from 'react-router-dom';
import Input from '../forms/input'
import Button from '../forms/button'

const loginForm = () => {
  

  function handleSubmit(event) {
    event.preventDefault();
    fetch('https://dogsapi.origamid.dev/json/jwt-auth/v1/token' , { 
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(),
    }).then((response) => {
      console.log(response);
      return response;
    }).then((json) => {
      console.log(json);
    })
  }
  return (
    <section>
      <h1>Login</h1>
      <form action="" onSubmit={handleSubmit}>
        <Input label="Usuario" type="text" name="username"/>
        <Input label="Password" type="password" name="password"/>
       
        <Button>entrar</Button>
      </form>
      <Button><Link to='/login/criar'>cadastro</Link></Button>
    </section>
  );
};

export default loginForm;
