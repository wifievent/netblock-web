import React from 'react';
import { useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container } from 'react-bootstrap';
import axios from 'axios';
import Button from '../components/Button';

const contentHead = {
  width: '100%',
  height: '220px',
  backgroundColor: '#080D2B',
  color: '#DADBDF',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontWeight: '500',
  fontSize: '28px',
  marginBottom: '3rem',
};

const title = {
  width: '100%',
  padding: '0',
};

const div = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: '80%',
};

const textArea = {
  width: '100%',
  height: '200px',
};

const input = {
  width: '100%',
  marginBottom: '1rem',
};

const CpEditPage = () => {
  const [inputTitle, setInputTitle] = useState('');
  const [inputContent, setInputContent] = useState('');
  const [inputImage, setInputImage] = useState('');

  useEffect(() => {
    axios
      .get('/api/user/session', {}, { withCredentials: true })
      .then((res) => {})
      .catch((err) => {
        window.location.href = '/';
      });
  }, []);

  const handleInputTItle = (e) => {
    setInputTitle(e.target.value);
  };

  const handleInputContent = (e) => {
    setInputContent(e.target.value);
  };

  const handleImageChange = (e) => {
    const img = e.target.files[0];
    setInputImage(img);
  };

  const onClickButton = () => {
    if (inputTitle === '') {
      alert('제목을 입력하세요');
    } else if (inputContent === '') {
      alert('내용을 입력하세요');
    } else {
      const formData = new FormData();
      formData.append('title', inputTitle);
      formData.append('content', inputContent);
      formData.append('img', inputImage);

      axios({
        method: 'post',
        url: '/api/cp/component',
        data: formData,
        headers: { 'Content-Type': 'multipart/form-data' },
      })
        .then((res) => {
          alert('저장되었습니다');
          window.location.href = '/template';
        })
        .catch((err) => {
          console.log(err.data);
        });
    }
  };

  return (
    <div>
      <Fade>
        <div style={contentHead}>
          <div>
            <span style={{ color: '#31ECA9' }}>Captive Portal</span> 을
            꾸며보세요 !
          </div>
        </div>
      </Fade>
      <Container>
        <div className="faqCont">
          <div style={div}>
            <div style={title}>제목</div>

            <input
              style={{ width: '100%' }}
              type="text"
              name="title"
              id="title"
              required="true"
              onChange={handleInputTItle}
            />

            <div style={title}>내용</div>
            <textarea
              style={textArea}
              name="content"
              id="content"
              required="true"
              onChange={handleInputContent}
            ></textarea>

            <div style={title}>이미지</div>
            <input
              style={input}
              type="file"
              name="img"
              id="img"
              accept="image/*"
              onChange={handleImageChange}
            />
            <Button style={{ marginBottom: '1rem' }} onClick={onClickButton}>
              저장
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CpEditPage;
