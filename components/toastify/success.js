import React from 'react';
import { toast } from 'react-toastify';

const showSuccessToast = (msg) => {
    toast.success(msg, {
      position: 'top-right',
      autoClose: 1000, // Close the toast after 3 seconds
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'dark'
    });
  };

export default showSuccessToast;
