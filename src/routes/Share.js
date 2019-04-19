import React from 'react';
import { connect } from 'react-redux';
import textLogoIcon from '../assets/76x34.png';
import UserInfo from '../components/UserInfo';
import ShareInviteCode from '../components/ShareInviteCode';
import InviteStep from '../components/InviteStep';
import QRCode from '../components/QRCode';
import sloganIcon from '../assets/slogan.png';

class Share extends React.Component {
  render() {
    const { userInfo } = this.props;
    return (
      <div
        style={{
          position: 'relative',
          minHeight: '100vh',
          zIndex: 0,
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            borderRadius: '50%',
            width: '200vw',
            height: '200vw',
            backgroundImage: 'linear-gradient(-134deg, #FF6A4D 0%, #FF4040 100%)',
            position: 'absolute',
            bottom: '-140vw',
            left: '-50vw',
            zIndex: '-1',
          }}
        />
        <div
          style={{
            paddingTop: '3.2rem',
            position: 'relative',
          }}
        />
        <img
          src={textLogoIcon}
          alt="logo"
          style={{
            position: 'absolute',
            height: '2.8rem',
            top: '1.4rem',
            left: '1.4rem',
          }}
        />
        <UserInfo size="l" src={userInfo.headImage} username={userInfo.username} />
        <ShareInviteCode code={userInfo.code} />
        <QRCode />
        <InviteStep />
        <div
          style={{
            width: '60vw',
            margin: '0 auto',
          }}
        >
          <img
            src={sloganIcon}
            alt="slogan"
            style={{
              width: '100%',
            }}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { inviteList, tutor, userInfo, codeInvite } = state.user;
  return {
    inviteList,
    tutor,
    userInfo,
    codeInvite,
  };
};

export default connect(mapStateToProps)(Share);
