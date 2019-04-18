import React from 'react';

class InviteInput extends React.Component {
  state = {
    value: '',
  };
  render() {
    const { value } = this.state;
    const { onSubmit } = this.props;
    return (
      <div
        style={{
          width: '20rem',
          height: '3.2rem',
          margin: '0 auto',
          background: '#fff',
          borderRadius: '.6rem',
          textAlign: 'center',
          position: 'relative',
        }}
      >
        <input
          onChange={e => this.setState({ value: e.target.value })}
          placeholder="输入ta的邀请码"
          style={{
            textAlign: value ? 'left' : 'center',
            border: 'none',
            outline: 'none',
            margin: '0 .8rem',
            height: '3.2rem',
            width: '18rem',
            fontSize: '1.3rem',
          }}
        />
        {value ? (
          <button
            style={{
              color: '#fff',
              background: '#FF4050',
              position: 'absolute',
              right: '.8rem',
              top: '.3rem',
              borderRadius: '.4rem',
              width: '4.8rem',
              height: '2.6rem',
              border: 'none',
              outline: 'none',
              boxShadow: 'none',
            }}
            onClick={() => {
              const { value } = this.state;
              onSubmit(value);
            }}
          >
            确定
          </button>
        ) : null}
      </div>
    );
  }
}

export default InviteInput;
