import react from 'react';
import FeedPhotosItem from './feedPhotosItem';
import UseFetch from '../../Hooks/useFetch';
import { PHOTOS_GET } from '../../api';
import Erro from '../helper/Erro';
import Loading from '../helper/loading';

const feedPhotos = () => {

const {data,loading,erro,request} = UseFetch();
react.useEffect (() => {
  async function fetchPhotos(){
    const { URL, Option} = PHOTOS_GET({page:1 , total: 6 , user: 0 });
    const {response, json}=await request(URL, Option)
    console.log(json)
  }
  fetchPhotos();
},[request])

if(erro) return<Erro error={erro} />;
if (loading) return <Loading />;
if(data) 
  return ( <ul>
    {data.map(photo => <FeedPhotosItem key={photo.id} photo="photo" />)} 
    </ul>
  );
  else return null;
  
};

export default feedPhotos;
