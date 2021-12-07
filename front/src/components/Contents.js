import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import '../styles/style.css';
import CompTable from './CompTable';
import NoteBookSvg from './NoteBookSvg';
import noWifi from '../img/no-wifi.png';
import AdYoutube from './AdYoutube';
import ImgHead from './ImgHead';
import ImgContent from './ImgContent';
import ContentHeader from './ContentHeader';

const landingH1 = {
  color: '#767676',
  textAlign: 'center',
  fontSize: '30px',
  fontWeight: '500',
  margin: '5vw 0 5vw 0',
  paddingTop: '5vw',
};

const landingH2 = {
  color: '#767676',
  textAlign: 'center',
  fontSize: '28px',
  fontWeight: '400',
  marginBottom: '5vw',
};

const landingH3 = {
  color: '#767676',
  textAlign: 'center',
  fontSize: '25px',
  fontWeight: '400',
  marginBottom: '5vw',
};

const landingLeft = {
  color: '#151B43',
  textAlign: 'left',
  fontSize: '25px',
  fontWeight: '500',
  width: '90%',
};

const landingDiv = {
  width: '100%',
  margin: '20vh 0 20vh 0',
};

const landingText = {
  margin: '20vh 0 20vh 0',
  backgroundColor: '#f8f8f8',
};

const img = {
  width: '30vw',
};

const col = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  lineHeight: '2',
};

const landingHighlight = {
  backgroundColor: '#151B43',
  color: '#767676',
  textAlign: 'center',
  fontSize: '30px',
  fontWeight: '500',
  padding: '5vw 0 5vw 0',
};

const highlight = {
  fontWeight: '700',
  color: '#DADBDF',
};

const youtube = {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
};

const LandingText = () => {
  return (
    <Fade bottom>
      <div style={landingText}>
        <div style={landingH1}>
          모두가 잠든 새벽...
          <br />
          자녀가 밤새 게임을 하는 건 아닌지 불안하신가요?
        </div>
        <div style={landingH2}>
          스마트폰을 손에서 내려놓지 못하는 자녀와
          <br />
          갈등을 겪고 계신가요?
        </div>
        <div style={landingH3}>그래서 준비했습니다</div>
        <div style={landingHighlight}>
          <span style={highlight}>NetBlock 과 함께라면 걱정 </span>
          <span style={{ fontWeight: 'bold', color: 'crimson' }}>STOP ‼</span>
        </div>
      </div>
    </Fade>
  );
};

const LandingPic = () => {
  return (
    <Fade bottom>
      <div style={landingDiv}>
        <Row style={{ margin: '0' }}>
          <Col style={col}>
            <img style={img} src={noWifi} alt="no-wifi" />
          </Col>
          <Col style={col}>
            <div style={landingLeft}>
              다른 제품은 할 수 없습니다
              <br />
              오직{' '}
              <span style={{ color: 'black', fontWeight: '700' }}>
                NetBlock
              </span>{' '}
              만이 자녀의 인터넷 사용을
              <br />
              <span style={{ color: 'crimson', fontWeight: '700' }}>
                완벽하게
              </span>{' '}
              차단시킬 수 있습니다
              <br />
            </div>
          </Col>
        </Row>
      </div>
    </Fade>
  );
};

const VpnYoutube = () => {
  return (
    <div style={landingDiv}>
      <div style={youtube}>
        <span
          style={{ fontSize: '2rem', fontWeight: '500', padding: '1rem 1rem' }}
        >
          VPN 이용 ipTIME Bypass
        </span>
        <AdYoutube style={youtube} vId="2tO8WUUYu00" auto="0" />
      </div>
    </div>
  );
};

const Contents = () => {
  return (
    <div>
      <ContentHeader
        title="WiFiEvent"
        content=" 의 제품을 지금 바로 만나보세요 !"
      />
      <div>
        <Container className="mt-5" style={{ textAlign: 'center' }}>
          <NoteBookSvg />
        </Container>
      </div>
      <LandingText />
      <LandingPic />
      <Fade bottom>
        <CompTable />
      </Fade>
      <ImgContent />
      <VpnYoutube />
      <ImgHead />
    </div>
  );
};

export default Contents;
