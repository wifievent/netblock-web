import React from "react";
import { Container } from "react-bootstrap";

const Faq = () => {
  return (
    <>
      <div className="faq">FAQ</div>
      <div className="faqCont">
        <hr className="faq-hr" />
        <div className="faq-q">
          Q. Windows 에서 절전 모드로 들어가면 어떻게 되나요 ?
        </div>
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
