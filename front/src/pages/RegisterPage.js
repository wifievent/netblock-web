import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { Row, Col } from 'react-bootstrap';
import StyledCard from '../components/StyledCard';
import Button from '../components/Button';
import '../styles/style.css';

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
      .catch(() => {
        alert('이미 존재하는 ID 입니다.');
        window.location.href = '/register';
      });
  };

  return (
    <StyledCard type="register">
      <h2>회원가입</h2>
      <Row>
        <Col>
          <label htmlFor="input_id">ID </label>
        </Col>
        <Col>
          <input
            className="inputCom"
            type="text"
            name="input_id"
            value={inputId}
            onChange={handleInputId}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <label htmlFor="input_pw">비밀번호</label>
        </Col>
        <Col>
          <input
            className="inputCom"
            type="password"
            name="input_pw"
            value={inputPw}
            onChange={handleInputPw}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <label htmlFor="input_name">이름</label>
        </Col>
        <Col>
          <input
            className="inputCom"
            type="text"
            name="input_name"
            value={inputName}
            onChange={handleInputName}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <label htmlFor="input_email">e-mail</label>
        </Col>
        <Col>
          <input
            className="inputCom"
            type="text"
            email="input_email"
            value={inputEmail}
            onChange={handleInputEmail}
          />
        </Col>
      </Row>
      <Row>
        <Button onClick={onClickRegister}>Sign up</Button>
      </Row>
    </StyledCard>
  );
};

export default RegisterPage;
