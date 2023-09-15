import axios from 'axios';
import React, { useContext, useState } from 'react';
import bcrypt from 'bcryptjs';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import { useRouter } from 'next/router';

const Register = () => {
  const [isLoad, setIsLoad] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const router = useRouter();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const hashedPassword = await bcrypt.hash(formData.password, 10);
    try {
      setIsLoad(true);
      const res = await axios.post('/api/register', {
        username: formData.username,
        password: hashedPassword,
      });
      console.log(res.data);
      setIsLoad(false);
      router.push('/account/login');
    } catch (error) {
      setIsLoad(false);
      console.log(error);
    }
  };
  return (
    <>
      <Header />
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 max-w-md m-auto text-center text-white bg-blue-950 py-16 px-8 rounded-xl"
      >
      <h1 className='font-bold text-2xl'>Register Form</h1>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          required
          placeholder='Username'
          className="text-black py-2 pl-2 outline-none rounded-md"
        />
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
          placeholder='password'
          className="text-black py-2 pl-2 outline-none rounded-md"
        />
        <button
          type="submit"
          className="text-white bg-emerald-500 p-2 w-[30%] mx-auto rounded-md  "
        >
          {isLoad ? 'Regsitering...' : 'Register'}
        </button>
      </form>
      <Footer />
    </>
  );
};

export default Register;
