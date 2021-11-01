import React from "react";
import { Container } from "react-bootstrap";
import "../styles/style.css";
import notebook from "../img/NoteBook.png";

const Contents = () => {
  return (
    <>
      <div className="contentHead">
        <div>
          <span style={{ color: "#31ECA9" }}>WiFiEvent</span> 의 제품을 지금
          바로 만나보세요 !
        </div>
      </div>
      <Container className="mt-5" style={{ width: "80vh" }}>
        <img className="d-block w-100" alt="notebook" src={notebook} />
      </Container>
    </>
  );
};

export default Contents;
