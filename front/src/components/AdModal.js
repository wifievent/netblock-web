import React from "react";
import AdYoutube from "./AdYoutube";
import { Container, Modal, Button } from "react-bootstrap";

const AdModal = ({ show, handleClose }) => {
  return (
    <div>
      <Container>
        <Modal size="lg" show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title style={{ fontWeight: "600" }}>
              <span style={{ color: "#1BB19F" }}>NetBlock</span> 을 사용해보세요
              !
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <AdYoutube />
          </Modal.Body>
          <Modal.Footer>
            <Button
              style={{ backgroundColor: "#1BB19F", border: "none" }}
              variant="secondary"
              onClick={handleClose}
            >
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    </div>
  );
};

export default AdModal;
