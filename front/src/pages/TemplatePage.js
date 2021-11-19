import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import axios from 'axios';
import styled from 'styled-components';
import tp1 from '../img/tp1.png';

const Button = styled.button`
  width: 10rem;
  height: 10rem;
  border: 3px solid ${(props) => props.color};
  background-image: url(${tp1});
  background-position: 0px 0px;
  background-size: cover;
  background-repeat: no-repeat;
`;

const cont = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
};

const text = {
  textAlign: 'center',
  margin: '1rem 1rem',
};

const onClickTp1Button = () => {
  console.log('1 click');
};

const TemplatePage = () => {
  const [color, setColor] = useState('gray');

  useEffect(() => {
    axios
      .get('/api/user/session', {}, { withCredentials: true })
      .then((res) => {})
      .catch((err) => {
        window.location.href = '/';
      });
  }, []);

  return (
    <Container style={cont}>
      <h3 style={text}>사용하실 템플릿을 선택해주세요</h3>
      <hr />
      <div style={text}>
        <h3 style={text}>템플릿 1</h3>
        <Button
          color={color}
          onClick={() => {
            setColor('red');
            onClickTp1Button();
          }}
        />
      </div>
    </Container>
  );
};

export default TemplatePage;
