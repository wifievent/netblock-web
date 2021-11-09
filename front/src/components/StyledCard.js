import React from 'react';
import { Container } from 'react-bootstrap';
import '../styles/style.css';

const containerStyle = {
  display: 'flex',
  justifyContent: 'center',
};

const cardStyleSmall = {
  border: '1px solid #bac3d4',
  borderRadius: '10px',
  minWidth: '280px',
  height: '300px',
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
};

const cardStyleLarge = {
  border: '1px solid #bac3d4',
  borderRadius: '10px',
  minWidth: '280px',
  maxWidth: '500px',
  height: '400px',
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
};

const StyledCard = ({ children, type }) => {
  return (
    <Container style={containerStyle}>
      <div
        style={type === 'login' ? cardStyleSmall : cardStyleLarge}
        className="cardDiv"
      >
        {children}
      </div>
    </Container>
  );
};

export default StyledCard;
