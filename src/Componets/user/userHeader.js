import react from 'react';
import UserHeaderNav from './userHeaderNav';
import Styles from './userHeader.module.css'
import { useLocation } from 'react-router-dom';


const userHeader = () => {
  const [title, setTitle] = react.useState('');
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const Location = useLocation();
  console.log(Location);

  react.useEffect(() => {
   setTitle(Location.pathname);
   
   if('/conta/estatisticas' === Location.pathname) setTitle('Estatisticas');
   if('/conta/postar' === Location.pathname) setTitle('Postar');
   if('/conta' === Location.pathname) setTitle('Conta');
   
  },[Location]);
  
  return (
    <header className={Styles.header}>
      <h1 className="title">{title}</h1>

<UserHeaderNav/>
    </header>


  );
};

export default userHeader;
