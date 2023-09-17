import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import bcrypt from 'bcryptjs';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import { useRouter } from 'next/router';
import showErrorToast from '../../../components/toastify/error';
import showSuccessToast from '../../../components/toastify/success';

const Register = () => {
  const router = useRouter();

  const validationSchema = Yup.object({
    username: Yup.string()
      .required('Username is required!')
      .min(3, 'Username must be at least 3 characters!'),
    password: Yup.string()
      .required('Password is required!')
      .min(6, 'Password must be at least 6 characters!'),
  });

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema,
    onSubmit: async (values) => {
      const hashedPassword = await bcrypt.hash(values.password, 10);
      try {
        const res = await axios.post('/api/register', {
          username: values.username,
          password: hashedPassword,
        });
        showSuccessToast(res.data.msg);
        router.push('/account/login');
      } catch (error) {
        showErrorToast(error.response.data.msg);
      }
    },
  });

  return (
    <>
      <Header />
      <form
        onSubmit={formik.handleSubmit}
        className="flex flex-col gap-4 w-[80vw] sm:w-[60vw] md:w-[50vw] lg:w-[30vw] m-auto text-center text-white bg-blue-950 py-16 px-8 rounded-xl"
      >
        <h1 className="font-bold text-2xl">Register Form</h1>
        <div className="username ">
          {formik.touched.username && formik.errors.username ? (
            <div className="text-red-500 text-[12px] ">
              {formik.errors.username}
            </div>
          ) : null}
          <input
            type="text"
            name="username"
            value={formik.values.username}
            onChange={formik.handleChange}
            placeholder="Username"
            className="text-gray-100 py-2 pl-2 w-[100%] outline-none rounded-md bg-[#06202A] "
          />
        </div>
        <div className="password ">
          {formik.touched.password && formik.errors.password ? (
            <div className="text-red-500 text-[12px] ">
              {formik.errors.password}
            </div>
          ) : null}
          <input
            type="password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            placeholder="Password"
            className="text-gray-100 w-[100%] py-2 pl-2 outline-none rounded-md bg-[#06202A] "
          />
        </div>
        <button
          type="submit"
          className="text-white bg-emerald-500 p-2 w-[30%] mx-auto rounded-md hover:bg-emerald-600"
        >
          {formik.isSubmitting ? 'Registering...' : 'Register'}
        </button>
      </form>
      <Footer />
    </>
  );
};

export default Register;
