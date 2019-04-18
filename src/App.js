import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import actions from './actions/user';
import Invite from './routes/Invite/index';
import './global.css';

class App extends Component {
  render() {
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
            backgroundImage: 'linear-gradient(-135deg, #FF6A4D 0%, #FF3333 100%)',
            margin: '0 auto',
          }}  
        >
          <Router>
            <Route path="/invite" component={Invite} />
          </Router>
        </div>
      </Provider>
    );
  }
}

export default App;
