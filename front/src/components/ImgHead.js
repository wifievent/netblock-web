import React from 'react';
import Fade from 'react-reveal/Fade';
import Head1 from '../img/head1.png';
import Head2 from '../img/head2.png';

const ImgHead = () => {
  return (
    <div className="imgDiv">
      <Fade>
        <img className="imgContentHead" src={Head1} alt="content9" />
      </Fade>
      <Fade>
        <img className="imgContentHead" src={Head2} alt="content10" />
      </Fade>
    </div>
  );
};

export default ImgHead;
