import { Navbar, Row, Col } from "react-bootstrap";
import React from "react";
import "../styles/style.css";

const Footer = () => {
  return (
    <div>
      <Row>
        <Col mkd="auto">
          <Navbar className="footerNav">
            <div className="footerContent">ⓒWiFiEvent</div>
          </Navbar>
        </Col>
      </Row>
    </div>
  );
};

export default Footer;
