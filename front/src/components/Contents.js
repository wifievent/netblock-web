import React from "react";
import { Container } from "react-bootstrap";
import { useSpring, animated } from "react-spring";
import "../styles/style.css";
import CompTable from "./CompTable";
import NoteBookSvg from "./NoteBookSvg";

const Contents = () => {
  const props = useSpring({ opacity: 1, from: { opacity: 0 } });

  return (
    <>
      <div className="contentHead">
        <div>
          <span style={{ color: "#31ECA9" }}>WiFiEvent</span> 의 제품을 지금
          바로 만나보세요 !
        </div>
      </div>
      <animated.div style={props}>
        <Container className="mt-5" style={{ textAlign: "center" }}>
          <NoteBookSvg />
        </Container>
      </animated.div>
      <CompTable />
    </>
  );
};

export default Contents;
