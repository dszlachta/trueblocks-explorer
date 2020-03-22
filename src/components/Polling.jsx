import * as React from 'react';

export const Polling = (pollingAction, duration = 5000, children) => () => {
  return () => class extends React.Component {

    componentDidMount = () => {
      this.props.pollingAction();
      this.dataPolling = setInterval(() => {
        this.props.pollingAction();
      }, duration);
    }

    componentWillUnmount = () => {
      clearInterval(this.dataPolling);
    }

    render = () => {
      console.log('I am here');
      return {children}
    }
  }
}
