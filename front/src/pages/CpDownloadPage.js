import React from 'react';
import Download from '../components/Download';

const CpDownloadPage = () => {
  return (
    <div className="downloadPage">
      <h3
        style={{
          textAlign: 'center',
          paddingBottom: '2rem',
          fontWeight: '600',
        }}
      >
        Captive Portal
      </h3>
      <Download name="cp"></Download>
    </div>
  );
};

export default CpDownloadPage;
