import React from 'react';
import { Link } from 'react-router-dom';
import Input from '../forms/input';
import Button from '../forms/button';
import UseForm from '../../Hooks/useForm';
import { TOKEN_POST, USER_GET } from '../../api';
import react from 'react';

const loginForm = () => {
  const usename = UseForm();
  const password = UseForm();
  react.useEffect(() => {
    const token = window.localStorage.getItem('token');
    if(token) {
      getUser(token);
    }
  }, [])

  async function getUser(token) {
    const{ url, opition} = USER_GET(token)
const response = await fetch(url, opition)
const json = await response.json();
console.log(json)
  }

  async function handleSubmit(event) {
    event.preventDefault();
    if (usename.validate() && password.validate()) {
      const { url, opition } = TOKEN_POST({
        usename: usename.value,
        password: password.value,
      });
      const response = await fetch(url, opition );
      const json = await response.json();
      Window.localStorage.setItem( 'token' , json.token );
      getUser(json.token)

        
    }
  }

  return (
    <section>
      <h1>login</h1>
      <form action="" onsubmit={handleSubmit}>
        <Input label="usuario" type="text" name="usuario" {...usename} />
        <Input label="senha" type="password" name="password" {...password} />
        <Button>entrar</Button>
      </form>
      <Link to="login/criar">cadastro</Link>
    </section>
  );
};

export default loginForm;
