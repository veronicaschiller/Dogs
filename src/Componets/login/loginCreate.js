import react from 'react';
import Input from '../forms/input';
import Button from '../forms/button';
import Erro from '../helper/Erro'
import UseForm from '../../Hooks/useForm';
import { USER_POST } from '../../api';
import { UserContext } from '../../UserContext';
import UseFetch from '../../Hooks/useFetch';

const loginCreate = () => {
  const username = UseForm();
  const email = UseForm('email');
  const password = UseForm('password');

  const { userLogin } = react.useContext(UserContext);
  const { loading, Error, request } = UseFetch();

  async function handleSubmit(event) {
    event.preventDefault();
    const { URL, Option } = USER_POST({
      username: username.value,
      email: email.value,
      password: password.value,
    });
    const { response } = await request(URL, Option);
    if (response.ok) userLogin(username.value,  password.value);
    console.log(response);
  }
  return (
    <section className="animeLeft">
      <h1 className="title">Cadastre-se</h1>
      <form onSubmit={handleSubmit}>
        <Input label="usuario" type="text" name="username" {...username} />
        <Input label="e-mail" type="email" nome="e-mail" {...email} />
        <Input label="senha" type="password" nome="password" {...password} />
        {loading ? ( <Button disabled>cadastrando...</Button>) : (

        <Button>cadastrar</Button>
        )}
        <Erro erro={Error}/>
      </form> 
    </section>
  );
};

export default loginCreate;
