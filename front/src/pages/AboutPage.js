import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Ljw from '../img/ljw.png';
import Chs from '../img/chs.jpg';
import Csy from '../img/csy.jpg';
import Gilgil from '../img/gilgil.jpg';
import Lsj from '../img/lsj.jpg';
import Kyh from '../img/kyh.jpg';

const cont = {
  margin: '3rem 3rem',
  display: 'flex',
  flexDirection: 'column',
};

const card = {
  boxShadow: '2px 2px 2px 2px #BAC3D4',
  border: '1px solid #BAC3D4',
  borderRadius: '10px',
  width: '15rem',
  height: '18rem',
  textAlign: 'center',
  margin: '1rem',
  padding: '1rem',
};

const position = {
  fontWeight: '600',
  fontSize: '1.3rem',
};

const img = {
  width: '10rem',
  borderRadius: '100%',
};

const col = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

const donationRow = {
  textAlign: 'center',
  margin: '2rem 0 2rem 0',
  fontWeight: '600',
  fontSize: '1.3rem',
};

const Person = (props) => {
  return (
    <div style={card}>
      <span>
        <img style={img} src={props.img} alt="img" />
      </span>
      <span>
        <div style={position}>{props.position}</div>
        {props.name}
      </span>
    </div>
  );
};

const AboutPage = () => {
  return (
    <div style={cont}>
      <Container>
        <Row>
          <Col style={col}>
            <Person name="gilgil" position="Project Mentor" img={Gilgil} />
          </Col>
          <Col style={col}>
            <Person name="Choi Hansu" position="Core Developer" img={Chs} />
          </Col>
          <Col style={col}>
            <Person name="Cho Soyeon" position="Core Developer" img={Csy} />
          </Col>
        </Row>
        <Row>
          <Col style={col}>
            <Person name="Lee Sungjin" position="Core Developer" img={Lsj} />
          </Col>
          <Col style={col}>
            <Person name="Lee Juwon" position="Frontend Developer" img={Ljw} />
          </Col>
          <Col style={col}>
            <Person
              name="Kim Yonghyeon"
              position="Backend Developer"
              img={Kyh}
            />
          </Col>
        </Row>
        <Row style={donationRow}>
          <div>
            You can give a free donation on the account number
            <br />
            <span style={{ color: '#00D288' }}>IBK 973-043757-01-011,</span>
            <br /> on name of the Lee Sungjin (Core Developer)
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default AboutPage;
