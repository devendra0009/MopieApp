import { useRouter } from 'next/router';
import React, { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import Image from 'next/image';
import showSuccessToast from './toastify/success';

const ProfileComponent = () => {
  const router = useRouter();
  const [click, setClick] = useState(false);
  const { user, setUser } = useContext(AuthContext);
  const handleLogout = () => {
    setClick(true);
    localStorage.removeItem('user');
    showSuccessToast('Logged Out Sucessfully!')
    router.push('/account/login');
    setClick(false);
  };
  return (
    <div className="bg-blue-950 py-16 w-[80%] md:w-[50%] mx-auto text-center flex flex-col gap-4 font-bold rounded-2xl">
      <h1 className=" text-xl">Profile</h1>
      <Image
        src={`https://img.freepik.com/free-psd/3d-illustration-person-with-glasses_23-2149436185.jpg?size=626&ext=jpg`}
        className="rounded-full w-[25%] md:w-[15%] mx-auto"
        width={100}
        height={100}
        alt=""
      />
      <h2 className="text-lg">{user?.username}</h2>
      <button
        onClick={handleLogout}
        className="bg-red-500 py-1 px-2 rounded-md w-[50%] mx-auto font-bold"
      >
        {click ? 'Logging Out...' : 'Logout'}
      </button>
    </div>
  );
};

export default ProfileComponent;
