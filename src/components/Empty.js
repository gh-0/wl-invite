import React from 'react';
import emptyIcon from '../assets/pic_invite_empty_n@2x.png';

const Empty = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        paddingBottom: "2rem"
      }}
    >
      <img
      alt="empty"
        src={emptyIcon}
        style={{
          display: 'block',
          width: '16.7rem',
          height: '12.5rem',
          margin: '4vh auto',
          marginBottom: '0',
        }}
      />
      <p
        style={{
          textAlign: 'center',
          color: '#8A8A8F',
        }}
      >
        暂无邀请其它用户
      </p>
    </div>
  );
};

export default Empty;
