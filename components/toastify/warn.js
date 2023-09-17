import React from 'react';
import { toast } from 'react-toastify';

const showWarnToast = (msg) => {
  toast.warn(msg, {
    position: 'top-right',
    autoClose: 2000, // Close the toast after 3 seconds
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'dark'
  });
};

export default showWarnToast;
