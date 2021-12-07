import React from 'react';
import Fade from 'react-reveal/Fade';

const contentHead = {
  width: '100%',
  height: '220px',
  backgroundColor: '#080D2B',
  color: '#DADBDF',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontWeight: '500',
  fontSize: '28px',
};

const ContentHeader = (props) => {
  return (
    <div>
      <Fade>
        <div style={contentHead}>
          <div>
            <span style={{ color: '#31ECA9' }}>{props.title}</span>
            {props.content}
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default ContentHeader;
