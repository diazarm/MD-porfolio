import React from 'react';
import pdf from '@../../../public/pdf/MarceloADiazCV.pdf'


const DownloadButton = () => {
  const handleDownload = () => {
    window.open(pdf, '_blank');
  };

  return (
    <button onClick={handleDownload}>
      Descargar PDF
    </button>
  );
};

export default DownloadButton;
