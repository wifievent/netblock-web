import React from "react";
import { Table, Container, Row, Col } from "react-bootstrap";
import { useSpring, animated } from "react-spring";
import "../styles/style.css";

const CompTable = () => {
  const props = useSpring({ opacity: 1, from: { opacity: 0 } });

  return (
    <div className="compContent">
      <Container>
        <animated.div style={props}>
          <Row className="tableRow">
            <Col md="auto">
              <div className="aboutDesc" style={{ fontSize: "25px" }}>
                왜 <span style={{ fontWeight: "700" }}>NetBlock</span> 인가요 ?
              </div>
              <Table borderless="true" className="compTable">
                <thead>
                  <tr>
                    <th></th>
                    <th style={{ color: "white" }}>NetBlock</th>
                    <th>G 제품</th>
                    <th>A사 제품</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>추가 설치</td>
                    <td>●</td>
                    <td>O</td>
                    <td>X</td>
                  </tr>
                  <tr>
                    <td>직접 조작</td>
                    <td>●</td>
                    <td>X</td>
                    <td>X</td>
                  </tr>
                  <tr>
                    <td>자녀 계정</td>
                    <td>●</td>
                    <td>X</td>
                    <td>X</td>
                  </tr>
                  <tr className="tabColBottom">
                    <td>추가 인증</td>
                    <td className="tableColBottom">●</td>
                    <td>X</td>
                    <td>X</td>
                  </tr>
                </tbody>
              </Table>
            </Col>
          </Row>
        </animated.div>
      </Container>
    </div>
  );
};

export default CompTable;
