import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useLocation } from 'react-router';
import axios from 'axios';
import styled from 'styled-components';
import tp1 from '../img/tp1.png';
import tp2 from '../img/tp2.png';
import tp3 from '../img/tp3.png';
import Button from '../components/Button';

const col = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

const ImgButton = styled.button`
  width: 9rem;
  height: 12rem;
  background-image: url(${(props) => props.img});
  background-position: 0px 0px;
  background-size: cover;
  background-repeat: no-repeat;
`;

const cont = {
  minHeight: '300px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
};

const text = {
  textAlign: 'center',
  fontSize: '2rem',
  margin: '0.8rem 0.8rem',
};

const TemplatePage = () => {
  const location = useLocation();
  const [currentClick, setCurrentClick] = useState(null);
  const [prevClick, setPrevClick] = useState(null);

  useEffect(() => {
    if (location.state.title === null) {
      alert('비정상적인 접근입니다.');
      window.location.href = '/';
    } else {
      console.log(location.state);
      axios
        .get('/api/user/session', {}, { withCredentials: true })
        .then((res) => {})
        .catch((err) => {
          alert('로그인 후 이용해주세요.');
          window.location.href = '/';
        });
    }
  }, []);

  const onClickImg = (e) => {
    setCurrentClick(e.target.id);
  };

  const onClickNext = () => {
    const formData = new FormData();
    const name = location.state.name;
    const title = location.state.title;
    const content = location.state.content;
    const image = location.state.image;
    const templateId = currentClick;

    formData.append('name', name);
    formData.append('title', title);
    formData.append('content', content);
    formData.append('img', image);
    formData.append('templateId', templateId);

    if (location.state.state === true) {
      // 페이지 수정 -> patch
      const id = location.state.id;
      axios({
        method: 'patch',
        url: '/api/cp/page/' + id,
        data: formData,
        headers: { 'Content-Type': 'multipart/form-data' },
      })
        .then((res) => {
          alert('저장되었습니다');
          window.location.href = '/mypage';
        })
        .catch((err) => {
          console.log(err.data);
        });
    } else {
      // 페이지 생성 -> post
      axios({
        method: 'post',
        url: '/api/cp/page',
        data: formData,
        headers: { 'Content-Type': 'multipart/form-data' },
      })
        .then((res) => {
          alert('페이지가 생성되었습니다');
          window.location.href = '/mypage';
        })
        .catch((err) => {
          console.log(err.data);
        });
    }
  };

  useEffect(
    (e) => {
      if (currentClick !== null) {
        let current = document.getElementById(currentClick);
        current.style.color = 'red';
        current.style.border = '2px solid';
      }

      if (prevClick !== null) {
        let prev = document.getElementById(prevClick);
        prev.style.color = 'gray';
        prev.style.border = 'none';
      }
      setPrevClick(currentClick);
    },
    [currentClick],
  );

  return (
    <Container style={cont}>
      <h3 style={text}>사용하실 템플릿을 선택해주세요</h3>
      <hr />
      <div style={text}>
        <Row>
          <Col style={col}>
            <h3 style={text}>1</h3>
            <ImgButton id="1" onClick={onClickImg} img={tp1} />
          </Col>
          <Col style={col}>
            <h3 style={text}>2</h3>
            <ImgButton id="2" onClick={onClickImg} img={tp2} />
          </Col>
          <Col style={col}>
            <h3 style={text}>3</h3>
            <ImgButton id="3" onClick={onClickImg} img={tp3} />
          </Col>
        </Row>
      </div>
      <Button onClick={onClickNext} style={{ marginTop: '2.5rem' }}>
        다음
      </Button>
    </Container>
  );
};

export default TemplatePage;
