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
                </Card.Text>
                <DownloadButton />
              </Card.Body>
            </Card>
          </Col>
          <Col className="colCard">
            <Card className="downloadCard">
              <Card.Body className="cardBody">
                <Card.Title className="cardTitle">Linux</Card.Title>
                <Card.Text></Card.Text>
                <DownloadButton />
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
