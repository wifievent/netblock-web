import { useState, useEffect } from 'react';
import {
  Nav,
  Navbar,
  Container,
  Row,
  Col,
  Button,
  Collapse,
} from 'react-bootstrap';
import axios from 'axios';
import '../styles/style.css';
import MenuSVG from './MenuSVG';
import logo from '../img/wf_logo.png';

const Header = () => {
  const [open, setOpen] = useState(false);
  const [session, setSession] = useState(false);

  useEffect(() => {
    axios
      .get('/api/user/session', {}, { withCredentials: true })
      .then((res) => {
        setSession(true);
      });
    console.log('useEffect');
    console.log(session);
  });

  return (
    <div>
      <Navbar className="headerNav">
        <Container>
          <Row className="w-100">
            <Col
              xxl="8"
              xl="8"
              lg="7"
              md="11"
              sm="10"
              xs="10"
              className="brandCol"
            >
              <Navbar.Brand
                href="/"
                style={{
                  fontWeight: '600',
                  color: '#DADBDF',
                  fontSize: '23px',
                }}
              >
                <img src={logo} alt="logo" style={{ width: '30px' }} />
                WiFiEvent
              </Navbar.Brand>
            </Col>
            <Col xl="3" lg="4" className="navbarHeader">
              <Nav className="me-auto">
                <Nav.Link
                  href="/download"
                  className="navItem"
                  style={{ color: '#AFAFB9', fontSize: '13px' }}
                >
                  Download
                </Nav.Link>
                <Nav.Link
                  href="/help"
                  className="navItem"
                  style={{ color: '#AFAFB9', fontSize: '13px' }}
                >
                  Help
                </Nav.Link>
                <Nav.Link
                  href="/qna"
                  className="navItem"
                  style={{ color: '#AFAFB9', fontSize: '13px' }}
                >
                  Q&A
                </Nav.Link>
                <Nav.Link
                  href="/faq"
                  className="navItem"
                  style={{ color: '#AFAFB9', fontSize: '13px' }}
                >
                  FAQ
                </Nav.Link>
                <Nav.Link
                  className="navItem"
                  href={session ? '/logout' : '/login'}
                >
                  <Button
                    style={{
                      border: '1px solid #27305D',
                      borderRadius: '5px',
                      padding: '0 15px',
                      height: '22px',
                      fontSize: '13px',
                      backgroundColor: '#27305D',
                      color: '#AFAFB9',
                    }}
                  >
                    {session ? 'logout' : 'login'}
                  </Button>
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
                  style={{ color: '#AFAFB9', fontSize: '13px' }}
                >
                  Download
                </Nav.Link>
                <Nav.Link
                  href="/help"
                  style={{ color: '#AFAFB9', fontSize: '13px' }}
                >
                  Help
                </Nav.Link>
                <Nav.Link
                  href="/qna"
                  style={{ color: '#AFAFB9', fontSize: '13px' }}
                >
                  Q&A
                </Nav.Link>
                <Nav.Link
                  href="/faq"
                  style={{ color: '#AFAFB9', fontSize: '13px' }}
                >
                  FAQ
                </Nav.Link>
                <Nav.Link
                  href={session ? 'logout' : 'login'}
                  style={{ color: '#AFAFB9', fontSize: '13px' }}
                >
                  {session ? 'logout' : 'login'}
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
