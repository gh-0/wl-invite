import React from 'react';
import fnCall from '../utils/fn-call';
import wechatIcon from '../assets/ic_weekly_newspaper_share_wechat_n.png';
import wechatMomentIcon from '../assets/ic_weekly_newspaper_share_wechatmoments_n.png';
import qqIcon from '../assets/ic_weekly_newspaper_share_qq_n.png';
import qqZoneIcon from '../assets/ic_weekly_newspaper_share_zone_n.png';

const share = type => {
  const search = new URLSearchParams(window.location.search);
  const token = search.get('token') || '004FD89B536DD4038DA497B994D6CE92';
  fnCall(
    'share',
    {
      type,
      url: `https://api.wenliaokeji.com/h5/?token=${token}#/share`,
      title: '这是标题',
    },
    ['type', 'url', 'title'],
  );
};

const Icon = ({ icon, onClick }) => {
  return (
    <div
      onClick={onClick}
      style={{
        boxSizing: 'content-box',
        margin: '.6rem .4px',
        display: 'block',
        width: '3.2rem',
        height: '3.2rem',
        backgroundImage: `url(${icon})`,
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    />
  );
};

const FixedBar = () => {
  return (
    <div
      style={{
        position: 'fixed',
        padding: '0 1rem',
        display: 'flex',
        background: 'rgba(0, 0, 0, .6)',
        justifyContent: 'center',
        bottom: '.8rem',
        left: '50%',
        transform: 'translateX(-50%)',
        borderRadius: '10px',
      }}
    >
      <Icon
        onClick={() => {
          share(1);
        }}
        icon={wechatIcon}
      />
      <Icon
        onClick={() => {
          share(2);
        }}
        icon={wechatMomentIcon}
      />
      <Icon
        onClick={() => {
          share(3);
        }}
        icon={qqIcon}
      />
      <Icon
        onClick={() => {
          share(4);
        }}
        icon={qqZoneIcon}
      />
    </div>
  );
};

export default FixedBar;
