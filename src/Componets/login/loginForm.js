import react from 'react';
import { Link } from 'react-router-dom';
import Input from '../forms/input';
import Button from '../forms/button';
import UseForm from '../../Hooks/useForm';
import { TOKEN_POST, USER_GET } from '../../api';

const loginForm = () => {
  const username = UseForm();
  const password = UseForm();

  react.useEffect(() => {
    const token = window.localStorage.getItem('token');
    if(token){
      getUser(token);
    }
  }, []);

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
    <section>
      <h1>Login</h1>
      <form action="" onSubmit={handleSubmit}>
        <Input label="Usuario" type="text" name="username" {...username} />
        <Input label="Password" type="password" name="password" {...password} />

        <Button>entrar</Button>
      </form>
      <Button>
        <Link to="/login/criar">cadastro</Link>
      </Button>
    </section>
  );
};

export default loginForm;
