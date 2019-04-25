import React from "react";
import Avatar from "./Avatar";
import fnCall from "../utils/fn-call";

class InviteListItem extends React.Component {
  render() {
    const { ind, avatar, username, userId, date } = this.props;

    return (
      <div
        onClick={() => {
          fnCall("onClickUser", { userId }, ["userId"]);
        }}
        style={{
          display: "flex",
          alignContent: "center",
          height: "6rem",
          padding: ".9rem",
          position: "relative"
        }}
      >
        <span
          style={{
            fontSize: "18px",
            lineHeight: "4.2rem",
            marginRight: "8px"
          }}
        >
          {ind}.
        </span>
        <Avatar size="m" src={avatar} />
        <div
          style={{
            marginLeft: "8px",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column"
          }}
        >
          <p
            style={{
              fontSize: "1.2rem",
              fontWeight: "bold",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              width: "32vw"
            }}
          >
            {username}
          </p>
          <p
            style={{
              marginTop: "4px",
              fontSize: "1.2rem"
            }}
          >
            {userId}
          </p>
        </div>
        <p
          style={{
            lineHeight: "4.2rem",
            color: "#8A8A8F",
            fontSize: "1rem",
            position: "absolute",
            padding: "0 8px",
            top: ".9rem",
            right: 0
          }}
        >
          {date}
        </p>
      </div>
    );
  }
}

export default InviteListItem;
