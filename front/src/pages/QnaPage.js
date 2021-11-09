import React from 'react';
import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { axios } from 'axios';
import Button from '../components/Button';

const row = {
  margin: '1rem',
  width: '80%',
};

const col = {
  display: 'flex',
  justifyContent: 'center',
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

const QnaPage = () => {
  const [inputTitle, setInputTitle] = useState('');
  const [inputContent, setInputContent] = useState('');
  const [selectedOs, setSelectedOs] = useState('');
  const [selectedVersion, setSelectedVersion] = useState('');

  const handleChangeOs = (e) => {
    console.log(`선택한 값 : ${e.target.value}`);
    setSelectedOs(e.target.value);
  };

  const handleChangeVersion = (e) => {
    console.log(`선택한 값 : ${e.target.value}`);
    setSelectedVersion(e.target.value);
  };

  const handleInputTItle = (e) => {
    setInputTitle(e.target.value);
  };

  const handleInputContent = (e) => {
    setInputContent(e.target.value);
  };

  const onClickButton = () => {
    axios
      .post('/feedback', {
        title: inputTitle,
        comment: inputContent,
        version: selectedVersion,
        os: selectedOs,
      })
      .then((res) => {
        alert('작성 완료');
      })
      .catch((err) => {
        console.log(err.data);
      });
  };

  return (
    <Container>
      <div className="faq">Q&A</div>
      <div className="faqCont">
        <hr className="faq-hr" />
        <div style={div}>
          <Row style={row}>
            <Col>제목</Col>
            <Col>
              <input
                style={{ width: '100%' }}
                type="text"
                name="input_title"
                onChange={handleInputTItle}
              />
            </Col>
          </Row>
          <Row style={row}>
            <Col>
              <textarea
                style={textArea}
                name="input_content"
                onChange={handleInputContent}
              ></textarea>
            </Col>
          </Row>
          <Row style={row}>
            <Col style={col}>
              <input
                id="windows"
                type="radio"
                value="windows"
                name="os"
                checked={selectedOs === 'windows'}
                onChange={handleChangeOs}
              />
              &nbsp;Windows
            </Col>
            <Col style={col}>
              <input
                id="linux"
                type="radio"
                value="linux"
                name="os"
                checked={selectedOs === 'linux'}
                onChange={handleChangeOs}
              />
              &nbsp;Linux
            </Col>
          </Row>
          <Row style={row}>
            <Col style={col}>
              <input
                id="0.8.0.0"
                type="radio"
                value="0.8.0.0"
                name="version"
                checked={selectedVersion === '0.8.0.0'}
                onChange={handleChangeVersion}
              />
              &nbsp;0.8.0.0
            </Col>
            <Col style={col}>
              <input
                id="0.8.0.1"
                type="radio"
                value="0.8.0.1"
                name="version"
                checked={selectedVersion === '0.8.0.1'}
                onChange={handleChangeVersion}
              />
              &nbsp;0.8.0.1
            </Col>
          </Row>
          <Row style={row}>
            <div style={{ textAlign: 'center' }}>
              <Button onClick={onClickButton}>글쓰기</Button>
            </div>
          </Row>
        </div>
      </div>
    </Container>
  );
};

export default QnaPage;
