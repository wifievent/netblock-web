import React from "react";
import { Button } from "react-bootstrap";

const DownloadButton = (props) => {
  return (
    <>
      <div className="dBtnDiv">
        <Button
          className="mt-1"
          variant="dark"
          size="lg"
          onClick={() => (window.location.href = "/api/netblock")}
        >
          Download
        </Button>
        <h5 className="btnDesc">{props.desc}</h5>
      </div>
    </>
  );
};

export default DownloadButton;
