import React from "react";

const DownloadBtn = () => {
  const android = window.navigator.userAgent.toLowerCase().indexOf("android") !== -1;
  return (
    <div
      style={{
        margin: "0 auto",
        textAlign: "center",
        height: "4.2rem",
        width: "80vw",
        background: "#FFCC00",
        borderRadius: "14px"
      }}
    >
      <a
        style={{
          color: "#4D3217",
          fontSize: "1.3rem",
          textDecoration: "none",
          lineHeight: "4.2rem",
          fontWeight: "bold"
        }}
        // https://api.wenliaokeji.com/wechat-open-browser?td_channelid=android&tag=default
        href={`https://api.wenliaokeji.com/wechat-open-browser?td_channelid=${
          android ? "android" : "ios"
        }&tag=default`}
      >
        点击下载
      </a>
    </div>
  );
};

export default DownloadBtn;
