import React from "react";
import { Button } from "react-bootstrap";

const DownloadButton = (props) => {
  const redirect = () => {
    if (props.name === "windows") {
      window.location.href = "/api/netblock/?os=window";
    } else if (props.name === "linux") {
      window.location.href = "/api/netblock?os=linux";
    }
  };
  return (
    <>
      <div className="dBtnDiv">
        <Button className="mt-1" variant="dark" size="lg" onClick={redirect}>
          Download
        </Button>
        <h5 className="btnDesc">{props.desc}</h5>
      </div>
    </>
  );
};

export default DownloadButton;
