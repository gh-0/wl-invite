import React from "react";
import Avatar from "./Avatar";

const UserInfo = ({ avatar, username, userId, hasLink }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <Avatar src={avatar} size="l" hasLink={hasLink} />

      <p
        style={{
          textAlign: "center",
          fontWeight: "bold",
          color: "#fff",
          marginTop: "12px",
          fontSize: "18px",
          letterSpacing: 0
        }}
      >
        {username}
      </p>

      {userId ? (
        <p
          style={{
            textAlign: "center",
            color: "#fff",
            marginTop: "8px",
            letterSpacing: 0
          }}
        >
          {userId + 9999}
        </p>
      ) : null}
    </div>
  );
};

export default UserInfo;
