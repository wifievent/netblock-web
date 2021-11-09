import React from 'react';
import axios from 'axios';

const delCookie = (name) => {
  let date = new Date();
  date.setDate(date.getDate() - 100);
  let Cookie = `${name}=;Expires=${date.toUTCString()}`;
  document.cookie = Cookie;
  console.log(document.cookie);
};

const LogoutPage = () => {
  axios.get('/user/logout').then((res) => {
    delCookie('connect.sid');
    window.location.href = '/';
  });

  return <div></div>;
};

export default LogoutPage;
