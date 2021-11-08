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
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);

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
        <div className="faq-q">
          <button
            style={btnStyle}
            onClick={() => setOpen2(!open2)}
            aria-controls="faq-text"
            aria-expanded={open2}
          >
            Q. 프로그램을 항상 켜놓고 있어야 하나요?
          </button>
          <Collapse in={open2}>
            <div id="faq-text" style={textStyle}>
              차단시키고 싶은 디바이스의 정책을 걸어놓은 시간에
              <br />
              프로그램도 실행되고 있어야 차단이 가능합니다.
            </div>
          </Collapse>
        </div>
        <hr className="faq-hr" />
        <div className="faq-q">
          <button
            style={btnStyle}
            onClick={() => setOpen3(!open3)}
            aria-controls="faq-text"
            aria-expanded={open3}
          >
            Q. 프로그램을 다운받았는데 실행이 되지 않습니다
          </button>
          <Collapse in={open3}>
            <div id="faq-text" style={textStyle}>
              NetBlock은 윈도우 환경의 경우
              <br />
              다운로드 버튼 위에 있는 두개의 프로그램을 설치해야 실행이
              가능합니다.
            </div>
          </Collapse>
        </div>
        <hr className="faq-hr" />
        <div className="faq-q">
          <button
            style={btnStyle}
            onClick={() => setOpen4(!open4)}
            aria-controls="faq-text"
            aria-expanded={open4}
          >
            Q. 프로그램을 실행할 경우 컴퓨터의 부하는 없나요?
          </button>
          <Collapse in={open4}>
            <div id="faq-text" style={textStyle}>
              NetBlock Inpath환경으로 디바이스를 차단시키기 때문에
              <br />
              서버의 부담이 적습니다.
            </div>
          </Collapse>
        </div>
      </div>
    </>
  );
};

const FaqPage = () => {
  return (
    <div>
      <Container>
        <Faq />
      </Container>
    </div>
  );
};

export default FaqPage;
