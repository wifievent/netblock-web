import React from 'react';
import { Button } from 'react-bootstrap';

const DownloadButton = (props) => {
  const redirect = () => {
    // 모달 띄운 후 리다이렉트
    if (props.name === 'nbWindows') {
      window.location.href = '/api/netblock/?os=windows';
    } else if (props.name === 'nbLinux') {
      window.location.href = '/api/netblock/?os=linux';
    } else if (props.name === 'cpWindows') {
      window.location.href = '/api/cp/?os=windows';
    } else if (props.name === 'cpLinux') {
      window.location.href = '/api/cp/?os=linux';
    }
  };
  return (
    <>
      <div className="dBtnDiv">
        <Button className="mt-1 downBtn" size="lg" onClick={redirect}>
          다운로드
        </Button>
        <h5 className="btnDesc">{props.desc}</h5>
      </div>
    </>
  );
};

export default DownloadButton;
