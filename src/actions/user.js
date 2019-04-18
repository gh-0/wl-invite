import { createActions } from 'redux-actions';

export default createActions({
  USER_INFO: payload => payload,
  QUERY_USER_INFO: payload => payload, // saga
  INVITE_LIST: payload => payload,
  QUERY_INVITE_LIST: payload => payload, // saga
  TUTOR: payload => payload,
  QUERY_TUTOR: payload => payload, // saga
  FAKE_INVITE: payload => payload, // saga
});
