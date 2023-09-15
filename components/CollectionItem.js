import axios from 'axios';
import Image from 'next/image';
import React, { useContext } from 'react';
import { AiFillMinusCircle } from 'react-icons/ai';
import { AuthContext } from '../context/AuthContext';
import { useRouter } from 'next/router';

const CollectionItem = ({ data }) => {
  const BASE_URL = 'https://image.tmdb.org/t/p/w500/';
  const router=useRouter();

  const removeFromLater = async () => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      try {
        console.log(user, data);
        const sendData = {
          username: user.username,
          movieId: data._id,
        };
        console.log(sendData);
        const res = await axios.post(`/api/removeFromLater`, sendData);
        if(res.status==200)
        {
          router.push('/');
        }
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log('Please login!!');
    }
  };
  return (
    <div key={data._id}>
      <Image
        src={`${BASE_URL}${data.img}`}
        alt=""
        width={100}
        height={100}
        className=" w-20 h-20 mx-auto rounded-full"
      />
      <h1 className="text-center font-bold">{data.title}</h1>
      <AiFillMinusCircle
        size={30}
        className="mx-auto cursor-pointer transform hover:scale-110 mt-2"
        color="red"
        onClick={removeFromLater}
      />
    </div>
  );
};

export default CollectionItem;
