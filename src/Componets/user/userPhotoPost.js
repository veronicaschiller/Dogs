import react from 'react';
import Styles from './userPhotoPost.module.css';
import Input from '../forms/input';
import Button from '../forms/button';
import Useform from '../../Hooks/useForm';
import UseFetch from '../../Hooks/useFetch';
import { PHOTO_POST } from '../../api';
import Error from '../helper/Erro'
//import { Navigate } from 'react-router-dom';

const userPhotoPost = () => {
  const nome = Useform();
  const peso = Useform('number');
  const idade = Useform('number');
  const [img, setImg] = react.useState({});
  const { data, erro, loading, request } = UseFetch();
  //const navigate = Navigate();

  //react.useEffect(() =>{
 //   if(data) navigate('/conta');
// },[data, navigate])

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData();
    formData.append('img', img.raw);
    formData.append('nome', nome.value);
    formData.append('peso', peso.value);
    formData.append('idade', idade.value);

    const token = window.localStorage.getItem('token');
    const { URL, Option } = PHOTO_POST(formData, token);
    request(URL, Option);
  }
  function handleImgChange({ target }) {
    setImg({
      preview: URL.createObjectURL(target.files[0]),
      raw: target.files[0],
    });
  }
  return (
    <section className={`${Styles.photoPost} animeLeft`}>
      <form onSubmit={handleSubmit}>
        <Input label="nome" type="text" name="nome" {...nome} />
        <Input label="peso" type="number" name="peso" {...peso} />
        <Input label="idade" type="number" name="idade" {...idade} />
        <input className={Styles.files}type="file" name="img" id="img" onChange={handleImgChange} />
        {loading ?(<Button disabled >enviando</Button>) :(
        <Button>enviar</Button>
        )}
        <Error erro={erro}/>
      </form>
      <div>
        {img.preview && (
          <div
            className={Styles.preview}
            Styles={{ backgroundImage: `url('${img.preview}')` }}
          ></div>
        )}
      </div>
    </section>
  );
};

export default userPhotoPost;
