import React from 'react';

class TabTitle extends React.Component {
  render() {
    const { title, active, onClick } = this.props;
    return (
      <div
        onClick={onClick}
        style={{
          textAlign: 'center',
          background: active ? '#fff' : 'rgba(255,255,255,0.80)',
          flexGrow: 1,
          padding: '.9rem 0',
          fontSize: '1.2rem',
          borderRadius: '10px 10px 0 0',
        }}
      >
        <h4>{title}</h4>
      </div>
    );
  }
}

class Tabs extends React.Component {
  state = {
    activeInd: 0,
  };
  render() {
    const { children } = this.props;
    const { activeInd } = this.state;
    return (
      <div
        style={{
          width: '90vw',
          maxWidth: '540px',
          margin: '0 auto',
          marginTop: '1.6rem',
          bottom: '0',
        }}
      >
        <div
          style={{
            display: 'flex',
            width: '90vw',
            maxWidth: '540px',
            justifyContent: 'center',
          }}
        >
          {children.map((t, ind) => (
            <TabTitle
              key={`${t.props.title}${ind}`}
              title={t.props.title}
              active={ind === activeInd}
              onClick={() => this.setState({ activeInd: ind })}
            />
          ))}
        </div>
        <div
          style={{
            background: '#fff',
            borderRadius: '0 0 10px 10px',
            minHeight: '18rem',
            padding: "0 .8rem",
            paddingBottom: ".8rem"
          }}
        >
          {children && children.length && children[activeInd]}
        </div>
      </div>
    );
  }
}

export default Tabs;
