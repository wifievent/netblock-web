import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import DownloadButton from "../components/DownloadButton";
import "../styles/style.css";

const Download = () => {
  return (
    <>
      <Container className="downloadCont">
        <Row className="rowCard">
          <Col className="colCard">
            <Card className="downloadCard">
              <Card.Body className="cardBody">
                <Card.Title className="cardTitle">Windows</Card.Title>
                <Card.Text style={{ paddingTop: "30px" }}>
                  NetBlock 을 설치하기 이전에
                  <br />
                  다음 프로그램의 설치가 필요합니다.
                  <br />
                  <a href="https://nmap.org/npcap/dist/npcap-1.55.exe">
                    Npcap 1.55 installer
                  </a>
                  <br />
                  <a href="https://www.microsoft.com/ko-kr/download/confirmation.aspx?id=48145">
                    vc_redist.x86.exe
                  </a>
                </Card.Text>
                <DownloadButton name="windows" />
              </Card.Body>
            </Card>
          </Col>
          <Col className="colCard">
            <Card className="downloadCard">
              <Card.Body className="cardBody">
                <Card.Title className="cardTitle">Linux</Card.Title>
                <Card.Text></Card.Text>
                <DownloadButton name="linux" />
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <div className="version">
          Latest Version : v{process.env.REACT_APP_SERVICE_VERSION}
        </div>
      </Container>
    </>
  );
};

export default Download;
