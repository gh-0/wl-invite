import React from 'react';
import storyIcon from '../assets/ic_weekly_newspaper_share_story_n.webp';
import wechatIcon from '../assets/ic_weekly_newspaper_share_wechat_n.png';
import wechatMomentIcon from '../assets/ic_weekly_newspaper_share_wechatmoments_n.png';
import qqIcon from '../assets/ic_weekly_newspaper_share_qq_n.png';
import qqZoneIcon from '../assets/ic_weekly_newspaper_share_zone_n.png';

window.share = type => {
  return { title: 'dddd', type };
};

const Icon = ({ icon, onClick }) => {
  return (
    <i
      onClick={onClick}
      style={{
        boxSizing: 'content-box',
        margin: '8px',
        display: 'block',
        width: '40px',
        height: '40px',
        backgroundImage: `url(${icon})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    />
  );
};

const FixedBar = () => {
  return (
    <div
      style={{
        position: 'fixed',
        padding: '0 12px',
        display: 'flex',
        background: 'rgba(0, 0, 0, .6)',
        justifyContent: 'center',
        maxWidth: '60vw',
        bottom: '2vh',
        left: '50%',
        transform: 'translateX(-50%)',
        borderRadius: '10px',
      }}
    >
      <Icon
        onClick={() => {
          window.share(0);
        }}
        icon={storyIcon}
      />
      <Icon icon={wechatIcon} />
      <Icon icon={wechatMomentIcon} />
      <Icon icon={qqIcon} />
      <Icon icon={qqZoneIcon} />
    </div>
  );
};

export default FixedBar;
