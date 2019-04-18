import { handleActions } from 'redux-actions';
import actions from '../actions/user';

export default handleActions(
  {
    [actions.userInfo]: (state, { payload }) => ({
      ...state,
      userInfo: payload,
    }),
    [actions.inviteList]: (state, { payload }) => ({
      ...state,
      inviteList: payload,
    }),
    [actions.tutor]: (state, { payload }) => ({
      ...state,
      tutor: payload,
    }),
  },
  {
    userInfo: {},
    inviteList: [],
    tutor: {},
  },
);
