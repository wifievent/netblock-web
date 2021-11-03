import React from "react";
import { Container } from "react-bootstrap";

const Faq = () => {
  return (
    <Container>
      <div className="faq">FAQ</div>
      <div className="faqCont">
        <hr className="faq-hr" />
        <div className="faq-q">
          Q. Windows 에서 절전 모드로 들어가면 어떻게 되나요 ?
        </div>
      </div>
    </Container>
  );
};

export default Faq;
