import React from 'react';
import StepIcon from '../assets/step.png';

class InviteSteps extends React.Component {
  render() {
    return (
      <div style={{
        width: "80%",
        margin: "4.2rem auto"
      }}>
        <img alt="step" src={StepIcon} style={{
          width: "100%"
        }} />
      </div>
    );
  }
}

export default InviteSteps;
