import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import actions from './actions/user';
import Invite from './routes/Invite/index';
import Share from './routes/Share';

import dotBg from './assets/邀请拉新BG@1x.png';

import './global.css';

class App extends Component {
  render() {
    // @HACK
    window.android = window.android || window.ios;
    // 查询全部
    store.dispatch(actions.queryUserInfo());
    store.dispatch(actions.queryInviteList());
    store.dispatch(actions.queryTutor());
    return (
      <Provider store={store}>
        <div
          style={{
            maxWidth: '600px',
            minHeight: '100%',
            backgroundPosition: 'center, center',
            backgroundSize: 'cover, cover',
            background: `url(${dotBg}) center / cover, 
            linear-gradient(-135deg, #FF6A4D 0%, #FF3333 100%) center / cover`,
            margin: '0 auto',
          }}
        >
          <Router>
            <Route path="/invite" component={Invite} />
            <Route path="/share" component={Share} />
          </Router>
        </div>
      </Provider>
    );
  }
}

export default App;
