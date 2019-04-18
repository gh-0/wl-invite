import React from 'react';
import linkIcon from '../assets/ic_invite_relevance_n@2x.png';

const Avatar = ({ src, size, hasLink }) => {
  return (
    <div
      style={{
        position: 'relative',
      }}
    >
      <div
        style={{
          borderRadius: '50%',
          width: size === 'l' ? '6.7rem' : '4.2rem',
          height: size === 'l' ? '6.7rem' : '4.2rem',
          border: `${size === 'l' ? '.2rem' : '.1rem'} solid ${hasLink ? '#FFCC00' : '#F2F3F5'}`,
          backgroundImage: `url(${src})`,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundColor: '#E8E9ED',
        }}
      />
      {hasLink ? (
        <div
          style={{
            position: 'absolute',
            right: 0,
            bottom: 0,
          }}
        >
          <i
            style={{
              display: 'block',
              height: '24px',
              width: '24px',
              background: `url(${linkIcon})`,
              backgroundSize: 'cover',
            }}
          />
        </div>
      ) : null}
    </div>
  );
};

export default Avatar;
