import React from 'react';

const QRCode = ({ url }) => {
  return (
    <div
      style={{
        width: '15.6rem',
        border: '.3rem solid rgba(255, 255, 255, .4)',
        margin: '0 auto',
        marginTop: '1.6rem',
        borderRadius: '10px',
      }}
    >
      <div
        style={{
          width: '15rem',
          height: '15rem',
          border: '.3rem solid rgba(255, 255, 255, .9)',
          borderRadius: '6px',
          background: '#F2F3F5',
        }}
      />
    </div>
  );
};

export default QRCode;
