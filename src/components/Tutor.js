import React from 'react';
import fnCall from '../utils/fn-call';
import Avatar from './Avatar';
import lIcon from '../assets/l@2x.png';
import rIcon from '../assets/r@2x.png';

class Tutor extends React.Component {
  render() {
    const { username, userId, date, avatar } = this.props;
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '1.6rem',
        }}
      >
        <div
          onClick={() => {
            fnCall('onClickUser', { userId }, ['userId']);
          }}
        >
          <Avatar src={avatar} size="l" hasLink={true} />
        </div>
        <p
          style={{
            fontSize: '16px',
            fontWeight: 'bold',
            padding: '4px 0',
          }}
        >
          {username}
        </p>
        <p
          style={{
            fontSize: '14px',
            color: '#000',
          }}
        >
          {userId + 9999}
        </p>
        <section
          style={{
            marginTop: '15px',
            display: 'flex',
            position: 'relative',
          }}
        >
          <i
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '16px',
              height: '14px',
              background: `url(${lIcon})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          <p
            style={{
              padding: '0 16px',
              fontSize: '14px',
              fontWeight: 'bold',
              textAlign: 'center',
              letterSpacing: '0.2px',
            }}
          >
            我在 {date} 的那天， 接受了ta的邀请加入了问聊。
          </p>
          <i
            style={{
              position: 'absolute',
              right: 0,
              bottom: 0,
              width: '16px',
              height: '14px',
              background: `url(${rIcon})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        </section>
      </div>
    );
  }
}

export default Tutor;
