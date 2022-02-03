import react from 'react';
import { NavLink } from 'react-router-dom';
import { UserContext } from '../../UserContext';
import { ReactComponent as MinhasFotos } from '../../Assets/feed.svg';
import { ReactComponent as Estatistica } from '../../Assets/estatistica.svg';
import { ReactComponent as AdicionarFoto } from '../../Assets/add.svg';
import { ReactComponent as Logout } from '../../Assets/sair.svg';
import Styles from './userHeaderNav.module.css';
import UseMedia from '../../Hooks/useMedia';

const userHeaderNav = () => {
  const { userlogout } = react.useContext(UserContext);
  const mobile = UseMedia('(max-width:40rem)');
  console.log(mobile);

  const [mobileMenu, setMobileMenu] = react.useState(false);

  return (
    <>
      {mobile && (
        <button
        arial-label="menu" 
        className={Styles.mobileMenu}
        onClick={() => setMobileMenu(!mobileMenu)}>
          menu
        </button>
      )}

      <nav className={Styles.Nav}>
        <NavLink to="/conta" end>
          <MinhasFotos />
          {mobile && 'minhas fotos'}
        </NavLink>
        <NavLink to="/conta/estatisticas">
          <Estatistica />
          {mobile && 'estatisticas'}
        </NavLink>
        <NavLink to="/conta/postar">
          <AdicionarFoto />
          {mobile && 'Adicionar Fotos'}
        </NavLink>
        <button onClick={userlogout}>
          <Logout />
          {mobile && 'sair'}
        </button>
      </nav>
    </>
  );
};

export default userHeaderNav;
