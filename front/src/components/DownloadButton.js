import React from "react";
import { Button } from "react-bootstrap";

const DownloadButton = (props) => {
  const redirect = () => {
    if (props.name === "windows") {
      window.location.href = "/api/netblock/?os=windows";
    } else if (props.name === "linux") {
      window.location.href = "/api/netblock/?os=linux";
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
