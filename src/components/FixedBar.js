import React from "react";
import { connect } from "react-redux";
import fnCall from "../utils/fn-call";
import wechatIcon from "../assets/ic_weekly_newspaper_share_wechat_n.png";
import wechatMomentIcon from "../assets/ic_weekly_newspaper_share_wechatmoments_n.png";
import qqIcon from "../assets/ic_weekly_newspaper_share_qq_n.png";
import qqZoneIcon from "../assets/ic_weekly_newspaper_share_zone_n.png";

const share = (type, title, image) => {
  const search = new URLSearchParams(window.location.search);
  const token = search.get("token") || "004FD89B536DD4038DA497B994D6CE92";
  fnCall(
    "share",
    {
      type,
      url: `https://api.wenliaokeji.com/h5/?token=${token}#/share`,
      title,
      image:
        image ||
        "https://wllive.oss-cn-shenzhen.aliyuncs.com/resources/sys/icon/512wenliaox.png",
      content: "发布问题，解决你的疑惑。写下故事，找到有趣的人。"
    },
    ["type", "url", "title", "image", "content"]
  );
};

const Icon = ({ icon, onClick }) => {
  return (
    <div
      onClick={onClick}
      style={{
        boxSizing: "content-box",
        margin: ".6rem .4px",
        display: "block",
        width: "3.2rem",
        height: "3.2rem",
        backgroundImage: `url(${icon})`,
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
    />
  );
};

const FixedBar = ({ userInfo: { username, headImage } }) => {
  const title = `你的好友 ${username} 在玩问聊，邀请你一起来`;
  return (
    <div
      style={{
        position: "fixed",
        padding: "0 1rem",
        display: "flex",
        background: "rgba(0, 0, 0, .6)",
        justifyContent: "center",
        bottom: ".8rem",
        left: "50%",
        transform: "translateX(-50%)",
        borderRadius: "10px"
      }}
    >
      <Icon
        onClick={() => {
          share(1, title, headImage);
        }}
        icon={wechatIcon}
      />
      <Icon
        onClick={() => {
          share(2, title, headImage);
        }}
        icon={wechatMomentIcon}
      />
      <Icon
        onClick={() => {
          share(3, title, headImage);
        }}
        icon={qqIcon}
      />
      <Icon
        onClick={() => {
          share(4, title, headImage);
        }}
        icon={qqZoneIcon}
      />
    </div>
  );
};

const mapStateToProps = state => {
  const { userInfo } = state.user;
  return { userInfo };
};

export default connect(mapStateToProps)(FixedBar);
