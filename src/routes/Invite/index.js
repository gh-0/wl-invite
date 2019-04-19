import React from 'react';
import { connect } from 'react-redux';
import UserInfo from '../../components/UserInfo';
import InviteCode from '../../components/InviteCode';
import InviteInput from '../../components/InviteInput';
import Tabs from '../../components/Tabs';
import TabPane from '../../components/TabPane';
import InviteListItem from '../../components/InviteListItem';
import Tutor from '../../components/Tutor';
import FixedBar from '../../components/FixedBar';
import Empty from '../../components/Empty';
import actions from '../../actions/user';

const Invite = ({
  userInfo: { avatar, username, userId, code, codeInvite },
  inviteList,
  tutor,
  bindInvite,
}) => {
  return (
    <div
      style={{
        padding: '7rem 0',
        paddingBottom: '5.9rem',
        position: 'relative',
        minHeight: '100vh',
        zIndex: 0,
      }}
    >
      <div
        style={{
          height: '60vw',
          overflow: 'hidden',
          zIndex: -1,
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
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
          }}
        />
      </div>
      <UserInfo avatar={avatar} username={username} />
      <div
        style={{
          marginTop: '1.6rem',
        }}
      >
        <InviteCode code={code} />
      </div>
      <div
        style={{
          marginTop: '1.6rem',
        }}
      >
        {!(tutor && tutor.userId) && <InviteInput onSubmit={bindInvite} />}
      </div>
      <Tabs>
        <TabPane title="我邀请">
          {inviteList.map((el, ind) => (
            <InviteListItem
              key={el.userId}
              ind={ind + 1}
              avatar={el.headImage}
              date={el.date}
              username={el.username}
              userId={el.userId}
            />
          ))}
          {!(inviteList && inviteList.length) && <Empty />}
        </TabPane>
        <TabPane title="邀请我">
          {!(tutor && tutor.userId) ? (
            <Empty />
          ) : (
            <Tutor
              avatar={tutor.headImage}
              date={tutor.date}
              username={tutor.username}
              userId={tutor.userId}
            />
          )}
        </TabPane>
      </Tabs>
      <FixedBar />
    </div>
  );
};

const mapStateToProps = state => {
  const { inviteList, tutor, userInfo, codeInvite } = state.user;
  return {
    inviteList,
    tutor,
    userInfo,
    codeInvite,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    bindInvite: code => {
      dispatch(actions.fakeInvite({ code }));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Invite);
