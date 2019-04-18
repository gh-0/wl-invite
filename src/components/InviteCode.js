import React from 'react';
import Clipboard from 'clipboard';
import copyIcon from '../assets/ic_invite_copy_n@2x.png';

class InviteCode extends React.Component {
  componentDidMount() {
    new Clipboard('.copy');
  }
  render() {
    const { code } = this.props;
    return (
      <div
        style={{
          background: 'rgba(0,0,0,0.20)',
          borderRadius: '0.8rem',
          color: 'rgba(255, 255, 255, .8)',
          textAlign: 'center',
          padding: '0.8rem 2.4rem',
          width: '16.7rem',
          margin: '0 auto',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <p
          style={{
            float: 'left',
            lineHeight: '1.6rem',
          }}
        >
          我的邀请码：{code}
          <i
            className="copy"
            data-clipboard-text={code}
            style={{
              display: 'block',
              marginLeft: '8px',
              background: `url(${copyIcon})`,
              width: '1.6rem',
              height: '1.6rem',
              backgroundSize: 'contain',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              float: 'right',
              cursor: 'pointer',
            }}
          />
        </p>
      </div>
    );
  }
}

export default InviteCode;
