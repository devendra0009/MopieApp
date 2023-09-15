import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import axios from 'axios';
import CollectionItem from './CollectionItem';

const CollectionComponent = () => {
  // const { user, setUser } = useContext(AuthContext);
  const [userData, setUserData] = useState([]);
  const [load, setLoad] = useState(false);
  // console.log(user);
  const fetchMovies = async () => {
    let user=JSON.parse(localStorage.getItem('user'))
    console.log(user);
    try {
      if (user) {
        setLoad(true);
        // console.log(user);
        const res = await axios.get(`/api/getData/?id=${user._id}`);
        // console.log(res.data);
        setUserData(res.data.user.movies);
        setLoad(false);
        // console.log(userData);
      } else {
        setLoad(false);
        console.log('Please Login First!!');
      }
    } catch (error) {
      setLoad(false);
      console.log(error);
    }
  };
  useEffect(() => {
    fetchMovies();
  }, []);
  return (
    <>
      {load ? (
        <h1 className='text-center font-bold text-2xl'>Loading...</h1>
      ) : (
        <div className=' w-[90vw] md:w-[70vw] mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-4'>
        {
          userData?.map((data)=>(
            <CollectionItem data={data}  />
          ))
        }
        </div>
      )}
    </>
  );
};

export default CollectionComponent;
