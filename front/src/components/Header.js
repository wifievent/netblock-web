import { useState } from "react";
import {
  Nav,
  Navbar,
  Container,
  Row,
  Col,
  Button,
  Collapse,
} from "react-bootstrap";
import "../styles/style.css";
import MenuSVG from "./MenuSVG";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Navbar className="headerNav">
        <Container>
          <Row className="w-100">
            <Col
              xxl="9"
              xl="9"
              lg="8"
              md="11"
              sm="10"
              xs="10"
              className="brandCol"
            >
              <Navbar.Brand
                href="/"
                style={{ fontWeight: "600", color: "#DADBDF" }}
              >
                WiFiEvent
              </Navbar.Brand>
            </Col>
            <Col xl="3" lg="4" className="navbarHeader">
              <Nav className="me-auto">
                <Nav.Link
                  href="/download"
                  className="navItem"
                  style={{ color: "#AFAFB9", fontSize: "13px" }}
                >
                  Download
                </Nav.Link>
                <Nav.Link
                  href="/help"
                  className="navItem"
                  style={{ color: "#AFAFB9", fontSize: "13px" }}
                >
                  Help
                </Nav.Link>
              </Nav>
            </Col>
            <Col md="1" sm="2" xs="2" className="mediaHeader">
              <Button
                onClick={() => setOpen(!open)}
                aria-controls="collapse-menu"
                aria-expanded={open}
              >
                <MenuSVG />
              </Button>
            </Col>
          </Row>
        </Container>
      </Navbar>
      <Navbar className="collapseNavbar">
        <Container>
          <Collapse in={open}>
            <div id="collapse-menu">
              <Nav>
                <Nav.Link
                  href="/download"
                  style={{ color: "#AFAFB9", fontSize: "13px" }}
                >
                  Download
                </Nav.Link>
                <Nav.Link
                  href="/help"
                  style={{ color: "#AFAFB9", fontSize: "13px" }}
                >
                  Help
                </Nav.Link>
              </Nav>
            </div>
          </Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
