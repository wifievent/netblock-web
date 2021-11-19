import React from 'react';
import Fade from 'react-reveal/Fade';
import Con1 from '../img/con1.png';
import Con2 from '../img/con2.png';
import Con3 from '../img/con3.png';
import Con4 from '../img/con4.png';
import Con5 from '../img/con5.png';
import Con6 from '../img/con6.png';
import Con7 from '../img/con7.png';
import Con8 from '../img/con8.png';
import Con9 from '../img/con9.png';
import Con10 from '../img/con10.png';

import '../styles/style.css';

const ImgContent = () => {
  return (
    <div className="imgDiv">
      <Fade>
        <img className="imgContent" src={Con1} alt="content1" />
      </Fade>
      <Fade>
        <img className="imgContent" src={Con2} alt="content2" />
      </Fade>
      <Fade>
        <img className="imgContent" src={Con3} alt="content3" />
      </Fade>
      <Fade>
        <img className="imgContent" src={Con4} alt="content4" />
      </Fade>
      <Fade>
        <img className="imgContent" src={Con5} alt="content5" />
      </Fade>
      <Fade>
        <img className="imgContent" src={Con6} alt="content6" />
      </Fade>
      <Fade>
        <img className="imgContent" src={Con7} alt="content7" />
      </Fade>
      <Fade>
        <img className="imgContent" src={Con8} alt="content8" />
      </Fade>
      <Fade>
        <img className="imgContentHead" src={Con9} alt="content9" />
      </Fade>
      <Fade>
        <img className="imgContentHead" src={Con10} alt="content10" />
      </Fade>
    </div>
  );
};

export default ImgContent;
