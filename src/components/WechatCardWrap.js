import React from "react";
import { connect } from "react-redux";

const debug = window.location.href.indexOf("debug") !== -1;

class WechatCardWrap extends React.Component {
  componentWillMount() {
    const { location, wx } = window;
    const url = location.href.split("#")[0];
    if (debug) {
      alert(url, encodeURIComponent(url));
    }
    fetch(`https://api.wenliaokeji.com/wechat?url=${encodeURIComponent(url)}`)
      .then(res => res.json())
      .then(data => {
        const { appId, timestamp, nonceStr, signature } = data;
        if (debug) {
          alert(JSON.stringify(data));
        }
        wx.config({
          debug,
          appId,
          timestamp: parseInt(timestamp),
          nonceStr,
          signature,
          jsApiList: [
            "updateAppMessageShareData",
            "updateTimelineShareData",
            "onMenuShareAppMessage",
            "onMenuShareTimeline"
          ]
        });
      })
      .catch(err => {
        console.error(err);
      });
  }

  render() {
    const { wx, location } = window;
    const {
      userInfo: { username, headImage }
    } = this.props;
    if (username) {
      const title = `你的好友 ${username} 在玩问聊，邀请你一起来`;
      const imgUrl =
        headImage ||
        "https://wllive.oss-cn-shenzhen.aliyuncs.com/resources/sys/icon/512wenliaox.png";

      wx.ready(function() {
        wx.onMenuShareAppMessage({
          title,
          desc: "发布问题，解决你的疑惑。写下故事，找到有趣的人。",
          link: location.href,
          imgUrl
        });
        wx.onMenuShareTimeline({
          title,
          link: location.href,
          imgUrl
        });
      });
    }

    const { children } = this.props;

    return children;
  }
}

const mapStateToProps = state => {
  const { userInfo } = state.user;
  return { userInfo };
};

export default connect(mapStateToProps)(WechatCardWrap);
