import React from 'react';
import Download from '../components/Download';
import '../styles/style.css';

const NbDownloadPage = () => {
  return (
    <div className="downloadPage">
      <h3
        style={{
          textAlign: 'center',
          paddingBottom: '2rem',
          fontWeight: '600',
        }}
      >
        NetBlock
      </h3>
      <Download name="nb"></Download>
    </div>
  );
};

export default NbDownloadPage;
