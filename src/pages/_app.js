import '@/styles/globals.css';
import { useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';

export default function App({ Component, pageProps }) {
  const [user, setUser] = useState(null);
  useEffect(()=>{
    if(localStorage.getItem('user'))
    {
      setUser(JSON.parse(localStorage.getItem('user')))
      // setUser('hi')
      console.log(localStorage.getItem('user'),user,'inapp');
    }
  },[])
  return (
    <AuthContext.Provider value={{user,setUser}}>
      <Component {...pageProps} />
    </AuthContext.Provider>
  );
}
