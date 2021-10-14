import React from "react";
import { Container, ListGroup } from "react-bootstrap";
import DownloadButton from "../components/DownloadButton";

const Download = () => {
  return (
    <>
      <Container className="Download">
        <div style={{ marginBottom: "30px" }}>
          Before installing our program
          <br />
          You need to install the below first
          <br />
          (for Windows only)
          <br />
          <a href="https://nmap.org/npcap/dist/npcap-1.55.exe">
            Npcap 1.55 installer
          </a>
          <br />
          <a href="https://www.microsoft.com/ko-kr/download/confirmation.aspx?id=48145">
            vc_redist.x86.exe
          </a>
        </div>
        <ListGroup as="ul">
          <ListGroup.Item as="li">
            <DownloadButton name="windows" desc="for Windows (64bit)" />
          </ListGroup.Item>
          <ListGroup.Item as="li">
            <DownloadButton name="linux" desc="for Linux (64bit)" />
          </ListGroup.Item>
        </ListGroup>
        <div style={{ marginTop: "30px" }}>
          Current Version : v{process.env.REACT_APP_SERVICE_VERSION}
        </div>
      </Container>
    </>
  );
};

export default Download;
