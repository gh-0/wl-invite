import React from "react";

const DownloadBtn = () => {
  const android =
    window.navigator.userAgent.toLowerCase().indexOf("android") !== -1;

  const downloadUrl = `https://api.wenliaokeji.com/wechat-open-browser?td_channelid=${
    android ? "android" : "ios"
  }&tag=default`;
  const debug = window.location.href.indexOf("debug") !== -1;
  if (debug) {
    alert(downloadUrl);
  }
  return (
    <div
      style={{
        margin: "0 auto",
        textAlign: "center",
        height: "4.2rem",
        width: "80%",
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
        href={downloadUrl}
      >
        点击下载
      </a>
    </div>
  );
};

export default DownloadBtn;
