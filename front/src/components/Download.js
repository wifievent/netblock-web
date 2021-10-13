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
          You need to install the npcap 1.55 installer
          <br />
          <a href="https://nmap.org/npcap/dist/npcap-1.55.exe">
            Npcap 1.55 installer
          </a>
          <br />
          <a href="https://nmap.org/npcap/dist/npcap-sdk-1.11.zip">
            Npcap SDK 1.11 (ZIP)
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
      </Container>
    </>
  );
};

export default Download;
