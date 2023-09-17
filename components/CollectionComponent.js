import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import axios from 'axios';
import CollectionItem from './CollectionItem';
import showWarnToast from './toastify/warn';
import showErrorToast from './toastify/error';
import showSuccessToast from './toastify/success';

const CollectionComponent = () => {
  const [userData, setUserData] = useState([]);
  const [load, setLoad] = useState(false);
  const fetchMovies = async () => {
    let user=JSON.parse(localStorage.getItem('user'))
    try {
      if (user) {
        setLoad(true);
        const res = await axios.get(`/api/getData/?id=${user._id}`);
        showSuccessToast()
        setUserData(res.data.user.movies);
        setLoad(false);
      } else {
        setLoad(false);
      }
    } catch (error) {
      setLoad(false);
      console.log(error.response.data.msg);
      showErrorToast(error)
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
        <>
          {userData.length > 0 ? (
            <div className=' w-[90vw] md:w-[70vw] mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-4'>
              {userData.map((data) => (
                <CollectionItem data={data} key={data.id} />
              ))}
            </div>
          ) : (
            <div className='text-center font-bold text-lg md:text-2xl text-gray-400'>
              Please login first!!
            </div>
          )}
        </>
      )}
    </>
  );
};

export default CollectionComponent;
