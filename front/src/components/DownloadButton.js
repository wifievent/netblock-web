import React from 'react';
import { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

const DownloadButton = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
        <Button className="mt-1 downBtn" size="lg" onClick={handleShow}>
          다운로드
        </Button>
        <h5 className="btnDesc">{props.desc}</h5>

        <Modal
          aria-labelledby="contained-modal-title-vcenter"
          centered
          show={show}
          onHide={handleClose}
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter"></Modal.Title>
          </Modal.Header>
          <Modal.Body>
            이 제품은 개인 사용자의 네트워크 제어 목적으로 만들어진 제품으로
            <br />
            공공장소 등에서 악의적인 목적으로 사용하거나
            <br />
            잘못된 사용으로 인한 손해가 발생한 경우
            <br />
            모든 법적 책임은 본인에게 있습니다
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={redirect}>
              동의합니다
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
};

export default DownloadButton;
