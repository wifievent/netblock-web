import React from 'react';
import { Container } from 'react-bootstrap';

const style = {
  border: '1px solid #bac3d4',
  borderRadius: '10px',
  width: '100%',
  minHeight: '30vh',
  padding: '10px',
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
};

const StyledCard = ({ children }) => {
  return (
    <Container>
      <div style={style}>{children}</div>
    </Container>
  );
};

export default StyledCard;
