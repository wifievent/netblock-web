import { Navbar, Row, Col } from 'react-bootstrap';
import React from 'react';
import '../styles/style.css';

const nav = {
  width: '100%',
  backgroundColor: '#080D2B',
  padding: '10px 1.5rem 10px 1.5rem',
};

const footer = {
  width: '100%',
  color: '#AFAFB9',
  fontSize: '12px',
};

const Footer = () => {
  return (
    <>
      <Navbar style={nav}>
        <Row style={footer}>
          <Col xs={5} md={9} lg={10}>
            ⓒWiFiEvent
          </Col>
          <Col xs={7} md={3} lg={2}>
            wifievent21@gmail.com
          </Col>
        </Row>
      </Navbar>
    </>
  );
};

export default Footer;
