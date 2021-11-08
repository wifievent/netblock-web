import React from 'react';
import { useState } from 'react';
import { Container, Collapse } from 'react-bootstrap';

const btnStyle = {
  border: 'none',
  backgroundColor: 'white',
  margin: '10px 0 10px 0',
};

const textStyle = {
  color: '#72757A',
};

const Faq = () => {
  const [open1, setOpen1] = useState(false);
  //const [open2, setOpen2] = useState(false);

  return (
    <>
      <div className="faq">FAQ</div>
      <div className="faqCont">
        <hr className="faq-hr" />
        <div className="faq-q">
          <button
            style={btnStyle}
            onClick={() => setOpen1(!open1)}
            aria-controls="faq-text"
            aria-expanded={open1}
          >
            Q. Windows 에서 네트워크 절전 모드를 해제하려면 어떻게 해야 하나요 ?
          </button>
          <Collapse in={open1}>
            <div id="faq-text" style={textStyle}>
              NetBlock 을 사용하기 위해서는 네트워크 절전 모드 해제가
              필요합니다.
              <br />
              [시작] - [검색] - [장치 관리자] 로 들어갑니다.
              <br />
              현재 사용하고 있는 네트워크 어댑터를 우클릭하여 [속성]을 실행한
              후,
              <br />
              [전원 관리] 탭에서 "전원을 절약하기 위해 컴퓨터가 이 장치를 끌 수
              있음" 체크를 해제합니다.
            </div>
          </Collapse>
        </div>
        <hr className="faq-hr" />
      </div>
    </>
  );
};

const Qna = () => {
  return <div></div>;
};

const QnaPage = () => {
  return (
    <div>
      <Container>
        <Faq />
      </Container>
      <Qna />
    </div>
  );
};

export default QnaPage;
