import { Component } from 'react';

type TimerStateType = {
  seconds: number;
};

class Timer extends Component<object, TimerStateType> {
  constructor() {
    super({});
    this.state = { seconds: 0 };
  }

  tick() {
    this.setState((state) => ({
      seconds: state.seconds + 1,
    }));
  }

  componentDidMount() {
    setInterval(() => this.tick(), 1000);
  }

  render() {
    return <div>Секунды: {this.state.seconds}</div>;
  }
}

export default Timer;
