import React from "react";
import "../styles/style.css";

import CompTable from "../components/CompTable";

const AboutPage = () => {
  return (
    <div className="compContent">
      <div className="aboutDesc">
        왜 <span style={{ fontWeight: "700" }}>NetBlock</span> 인가요 ?
      </div>
      <CompTable />
    </div>
  );
};

export default AboutPage;
