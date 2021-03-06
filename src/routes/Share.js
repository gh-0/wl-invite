import React from "react";
import { connect } from "react-redux";
import textLogoIcon from "../assets/76x34.png";
import UserInfo from "../components/UserInfo";
import ShareInviteCode from "../components/ShareInviteCode";
import InviteStep from "../components/InviteStep";
import DownloadBtn from "../components/DownloadBtn";
import WechatCardWrap from "../components/WechatCardWrap";
import sloganIcon from "../assets/slogan.png";
import "./Share.css";

class Share extends React.Component {
  render() {
    const debug = window.location.href.indexOf("debug") !== -1;
    if (debug) {
      try {
        window.alert(window.document.documentElement.clientHeight);
      } catch (err) {
        alert(JSON.stringify(err));
      }
    }
    const { userInfo } = this.props;
    console.log(userInfo);
    return (
      <WechatCardWrap>
        <div
          style={{
            position: "relative",
            minHeight: "100vh",
            zIndex: 0,
            overflow: "hidden"
          }}
        >
          <div
            style={{
              borderRadius: "50%",
              width: "200vw",
              height: "200vw",
              backgroundImage:
                "linear-gradient(-134deg, #FF6A4D 0%, #FF4040 100%)",
              position: "absolute",
              bottom: "-140vw",
              left: "-50vw",
              zIndex: "-1"
            }}
          />
          <div
            style={{
              paddingTop: "6rem",
              position: "relative"
            }}
          />
          <img
            src={textLogoIcon}
            alt="logo"
            style={{
              position: "absolute",
              height: "2.8rem",
              top: "1.4rem",
              left: "1.4rem"
            }}
          />
          <UserInfo
            size="l"
            avatar={userInfo.headImage}
            username={userInfo.username}
          />
          <ShareInviteCode code={userInfo.code} />
          {/* <QRCode /> */}
          <InviteStep />
          <DownloadBtn />
          <div className="slogan">
            <img
              src={sloganIcon}
              alt="slogan"
              style={{
                width: "100%"
              }}
            />
          </div>
        </div>
      </WechatCardWrap>
    );
  }
}

const mapStateToProps = state => {
  const { inviteList, tutor, userInfo, codeInvite } = state.user;
  return {
    inviteList,
    tutor,
    userInfo,
    codeInvite
  };
};

export default connect(mapStateToProps)(Share);
