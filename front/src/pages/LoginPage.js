import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Row, Col, Form } from 'react-bootstrap';
import StyledCard from '../components/StyledCard';
import Button from '../components/Button';
import '../styles/style.css';

const StyledA = styled.a`
  margin: 0 20px 0 0;
`;

const form = {
  textAlign: 'left',
  marginBottom: '1rem',
};

const formLable = {
  marginTop: '10px',
};

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
      })
      .catch((err) => {
        console.log(err);
        alert('ID 또는 비밀번호를 확인해주세요');
      });
  };

  return (
    <StyledCard type="login">
      <h2>로그인</h2>

      <Form style={form}>
        <Form.Label style={formLable}>ID</Form.Label>
        <Form.Control
          type="text"
          id="name"
          required="true"
          placeholder="ID"
          value={inputId}
          onChange={handleInputId}
        />
        <Form.Label style={formLable}>비밀번호</Form.Label>
        <Form.Control
          type="password"
          id="title"
          required="true"
          placeholder="Password"
          value={inputPw}
          onChange={handleInputPw}
        />
      </Form>
      <Row>
        <Col>
          <StyledA href="/register/terms">Sign up</StyledA>
        </Col>
        <Col style={{ justifyContent: 'right' }}>
          <Button onClick={onClickLogin}>Login</Button>
        </Col>
      </Row>
    </StyledCard>
  );
};

export default LoginPage;
