import React from 'react';
import Empty from './Empty';

class TabPane extends React.Component {
  render() {
    const { children } = this.props;
    return <div>{children ? children : <Empty />}</div>;
  }
}

export default TabPane;
