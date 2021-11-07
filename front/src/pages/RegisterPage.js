import React from 'react';
import { useState } from 'react';
import axios from '../axios';
import StyledCard from '../components/StyledCard';
import Button from '../components/Button';

const RegisterPage = () => {
  const [inputId, setInputId] = useState('');
  const [inputPw, setInputPw] = useState('');
  const [inputName, setInputName] = useState('');
  const [inputEmail, setInputEmail] = useState('');

  const handleInputId = (e) => {
    setInputId(e.target.value);
  };

  const handleInputPw = (e) => {
    setInputPw(e.target.value);
  };

  const handleInputName = (e) => {
    setInputName(e.target.value);
  };

  const handleInputEmail = (e) => {
    setInputEmail(e.target.value);
  };

  const onClickRegister = () => {
    axios({
      method: 'post',
      url: '/user/register',
      data: {
        uid: inputId,
        pw: inputPw,
        name: inputName,
        email: inputEmail,
      },
    })
      .then((res) => {
        window.location.href = '/login';
      })
      .catch();
  };

  return (
    <StyledCard>
      <div>
        <label htmlFor="input_id">ID : </label>
        <input
          type="text"
          name="input_id"
          value={inputId}
          onChange={handleInputId}
        />
      </div>
      <div>
        <label htmlFor="input_pw">PW : </label>
        <input
          type="password"
          name="input_pw"
          value={inputPw}
          onChange={handleInputPw}
        />
      </div>
      <div>
        <label htmlFor="input_name">NAME : </label>
        <input
          type="text"
          name="input_name"
          value={inputName}
          onChange={handleInputName}
        />
      </div>
      <div>
        <label htmlFor="input_email">EMAIL : </label>
        <input
          type="text"
          email="input_email"
          value={inputEmail}
          onChange={handleInputEmail}
        />
      </div>
      <div>
        <Button onClick={onClickRegister}>Sign up</Button>
      </div>
    </StyledCard>
  );
};

export default RegisterPage;
