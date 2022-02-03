import React from 'react';
import { Link } from 'react-router-dom';
import Input from '../forms/input';
import Button from '../forms/button';
import UseForm from '../../Hooks/useForm';
import { TOKEN_POST, USER_GET } from '../../api';
import erro from '../helper/Erro';
import Styles from './loginForm.module.css';
import StylesBTN from '../forms/button.module.css'

//import {userContext} from '../../userContext'

const loginForm = () => {
  const username = UseForm();
  const password = UseForm();
  //const context = react.userContext(userContext);
  //console.log(context);

  //const {userLogin} = react.userContext(userContext);

  //react.useEffect(() => {
    //onst token = window.localStorage.getItem('token');
    //if (token) {
     // getUser(token);
    //}
 // }, []);

  async function getUser(token) {
    const { URL, Option } = USER_GET(token);
    const response = await fetch(URL, Option);
    const json = await response.json();
    console.log(json);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    
    if (username.validate() && password.validate()) {
      const { URL, Option } = TOKEN_POST({
        username: username.value,
        password: password.value,
      });

      const response = await fetch(URL, Option);
      const json = await response.json();
      window.localStorage.setItem('token', json.token);
      getUser(json.token);
    }
  }
  return (
    <section className="animeLeft">
      <h1 className="title">Login</h1>
      <form className={Styles.form} onSubmit={handleSubmit}>
        <Input label="Usuario" type="text" name="username" {...username} />
        <Input label="Password" type="password" name="password" {...password} />

        <Button>entrar</Button>
        <erro erro={erro} />
      </form>
      <Link className={Styles.perdeu} to="/login/perdeu">
        perdeu a senha?
      </Link>
      <div className={Styles.cadastro}>
        <h2 className={Styles.subtitle}>Cadastre-se </h2>
        <p>ainda não possui conta</p>
        <Link className={StylesBTN.button} to='/login/criar'>
          cadastro
        </Link>
      </div>
    </section>
  );
};

export default loginForm;
