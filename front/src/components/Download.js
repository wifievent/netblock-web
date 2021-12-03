import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import DownloadButton from '../components/DownloadButton';
import '../styles/style.css';

const Download = (props) => {
  return (
    <>
      {props.name === 'nb' ? (
        <Container fluid="sm" className="downloadCont">
          <Row size="sm" className="rowCard">
            <Col md="auto" className="colCard">
              <Card className="downloadCard ">
                <Card.Body className="cardBody">
                  <Card.Title className="cardTitle">Windows</Card.Title>
                  <Card.Text style={{ paddingTop: '0' }}>
                    NetBlock 을 설치하기 이전에
                    <br />
                    다음 프로그램의 설치가 필요합니다.
                    <br />
                    <a href="https://nmap.org/npcap/dist/npcap-1.55.exe">
                      Npcap 1.55 installer
                    </a>
                    <br />
                    <a href="https://www.microsoft.com/ko-kr/download/details.aspx?id=48145">
                      vc_redist.x86.exe
                    </a>
                  </Card.Text>
                  <DownloadButton name="nbWindows" />
                </Card.Body>
              </Card>
            </Col>

            <Col md="auto" className="colCard">
              <Card className="downloadCard">
                <Card.Body className="cardBody">
                  <Card.Title className="cardTitle">Linux</Card.Title>
                  <Card.Text></Card.Text>
                  <DownloadButton name="nbLinux" />
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <div className="version">
            Latest Version : v{process.env.REACT_APP_SERVICE_VERSION}
          </div>
        </Container>
      ) : (
        <Container fluid="sm" className="downloadCont">
          <Row size="sm" className="rowCard">
            <Col md="auto" className="colCard">
              <Card className="downloadCard ">
                <Card.Body className="cardBody">
                  <Card.Title className="cardTitle">Windows</Card.Title>
                  <Card.Text style={{ paddingTop: '20px' }}></Card.Text>
                  <DownloadButton name="cpWindows" />
                </Card.Body>
              </Card>
            </Col>

            <Col md="auto" className="colCard">
              <Card className="downloadCard">
                <Card.Body className="cardBody">
                  <Card.Title className="cardTitle">Linux</Card.Title>
                  <Card.Text></Card.Text>
                  <DownloadButton name="cpLinux" />
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <div className="version">
            Latest Version : v{process.env.REACT_APP_SERVICE_VERSION}
          </div>
        </Container>
      )}
    </>
  );
};

export default Download;
