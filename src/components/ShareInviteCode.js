import React from 'react';

const ShareInviteCode = ({ code }) => {
  return (
    <div
      style={{
        background: 'rgba(0,0,0,0.20)',
        borderRadius: '0.8rem',
        color: 'rgba(255, 255, 255)',
        textAlign: 'center',
        padding: '0.8rem 2.4rem',
        width: '16.7rem',
        margin: '0 auto',
        position: 'relative',
        overflow: 'hidden',
        marginTop: "1.6rem",
        fontSize: "1.1rem"
      }}
    >
      <span>我的邀请码：</span>
      <span>{code}</span>
    </div>
  );
};

export default ShareInviteCode;
