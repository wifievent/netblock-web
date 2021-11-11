import React from 'react';
import { useState, useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import axios from 'axios';
import Button from '../components/Button';

const row = {
  margin: '1rem',
  width: '80%',
};

const title = {
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

const CpEditPage = () => {
  const [inputTitle, setInputTitle] = useState('');
  const [inputContent, setInputContent] = useState('');

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
    const formData = new FormData();
    formData.append('name', img);
    console.log(formData);
    for (const keyValue of formData) console.log(keyValue);
    axios.post('/cp/img', formData).then((res) => {
      console.log(res);
    });
  };

  const onClickButton = () => {
    axios
      .post('', {
        title: inputTitle,
        comment: inputContent,
      })
      .then((res) => {
        window.location.href = '/';
      })
      .catch((err) => {
        console.log(err.data);
      });
  };

  return (
    <Container>
      <div className="faq">Captive Portal 수정</div>
      <div className="faqCont">
        <hr className="faq-hr" />
        <div style={div}>
          <form>
            <Row style={row}>
              <div style={title}>제목</div>

              <input
                style={{ width: '100%' }}
                type="text"
                name="input_title"
                onChange={handleInputTItle}
              />
            </Row>
            <Row style={row}>
              <div style={title}>내용</div>
              <textarea
                style={textArea}
                name="input_content"
                onChange={handleInputContent}
              ></textarea>
            </Row>
            <Row style={row}>
              <div style={title}>이미지</div>
              <input
                style={{ padding: '0' }}
                type="file"
                name="img"
                accept="image/*"
                onChange={handleImageChange}
              />
            </Row>

            <Row style={row}>
              <div style={{ textAlign: 'center' }}>
                <Button onClick={onClickButton}>저장</Button>
              </div>
            </Row>
          </form>
        </div>
      </div>
    </Container>
  );
};

export default CpEditPage;
