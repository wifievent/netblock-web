import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Row, Col } from 'react-bootstrap';
import StyledCard from '../components/StyledCard';
import Button from '../components/Button';
import '../styles/style.css';

const StyledA = styled.a`
  margin: 0 20px 0 0;
`;

const LoginPage = () => {
  const [inputId, setInputId] = useState('');
  const [inputPw, setInputPw] = useState('');

  const handleInputId = (e) => {
    setInputId(e.target.value);
  };

  const handleInputPw = (e) => {
    setInputPw(e.target.value);
  };

  const onClickLogin = () => {
    axios
      .post('/user/login', {
        uid: inputId,
        pw: inputPw,
      })
      .then((res) => {
        console.log(res);
        window.location.href = '/';
      });
  };

  return (
    <StyledCard type="login">
      <h2>로그인</h2>
      <Row>
        <Col>
          <label htmlFor="input_id">ID&nbsp;</label>
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
          <label htmlFor="input_pw">PW&nbsp;</label>
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
          <StyledA href="/register">Sign up</StyledA>
        </Col>
        <Col style={{ justifyContent: 'right' }}>
          <Button onClick={onClickLogin}>Login</Button>
        </Col>
      </Row>
    </StyledCard>
  );
};

export default LoginPage;
