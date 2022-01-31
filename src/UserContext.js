import react from 'react';
import { TOKEN_POST, USER_GET, TOKEN_VALIDATE_POST } from './api';
//import { UseNavigate } from 'react-router-dom';

export const UserContext = react.createContext(true);
export const userStorage = ({ children }) => {
  const [data, setData] = react.useState(null);
  const [login, setLogin] = react.useState(null);
  const [loading, setLoading] = react.useState(false);
  const [erro, setErro] = react.useState(null);
  //const navigate = UseNavigate();

  react.useEffect(() => {
    async function autoLogin() {
      const token = window.localStorage.getItem('token');
      if (token) {
        try {
          const { URL, opitions } = TOKEN_VALIDATE_POST(token);
          const response = await fetch(URL, opitions);
          if (!response.ok) throw new erro('token ivalid');
          await getUser(token);
        } catch (err) {
        } finally {
          setLoading(false);
        }
      }
    }
    autoLogin();
  }, []);

  async function getUser(token) {
    const { URL, opitions } = USER_GET(token);
    const response = await fetch(URL, opitions);
    const json = await response.json();
    setData(json);
    setLogin(true);
  }

  async function userLogin(username, password) {
    try {
      setErro(null);
      setLoading(true);
      const { URL, opitions } = TOKEN_POST({ username, password });
      const tokenRes = await fetch(URL, opitions);
      if (!tokenRes.ok) throw new erro(`erro:${tokenRes.statusText}`);
      const { token } = await tokenRes.json();
      window.localStorage.setItem('token', token);
      await getUser(token);
      //navigate('/conta');
    } catch (err) {
      setErro(err.messege);
      setLogin(false);
    } finally {
      setLoading(false);
    }
  }

  const userlogout = react.useCallback(
    async function userlogout() {
      setData(null);
      setErro(null);
      setLoading(false);
      setLogin(false);
     // window.localStorage.removeItem(token);
     // navigate('/login');
    },
    [],
  );

  return ( 
    <UserContext.Provider
      value={{ userLogin, userlogout, data, Error, loading, login }}
    >
      {children}
    </UserContext.Provider>
  );
};
