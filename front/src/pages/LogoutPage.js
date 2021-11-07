import React from 'react';
import axios from '../axios';

const LogoutPage = () => {
  axios.get('/user/logout').then((res) => {
    window.location.href = '/';
  });

  return <div></div>;
};

export default LogoutPage;
