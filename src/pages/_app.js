import '@/styles/globals.css';
import { useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App({ Component, pageProps }) {
  const [user, setUser] = useState(null);
  useEffect(()=>{
    if(localStorage.getItem('user'))
    {
      setUser(JSON.parse(localStorage.getItem('user')))
    }
  },[])
  return (
    <AuthContext.Provider value={{user,setUser}}>
      <ToastContainer/>
      <Component {...pageProps} />
    </AuthContext.Provider>
  );
}
