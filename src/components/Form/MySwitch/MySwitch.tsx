import { Component, ReactNode } from 'react';
import './MySwitch.scss';

export interface IInputStateProps {
  id: string;
  title: string;
  refer: React.RefObject<HTMLInputElement>;
  error: string;
  isValid: boolean;
}

class MySwitch extends Component<IInputStateProps> {
  render(): ReactNode {
    return (
      <div className="switch">
        <p>{this.props.title}</p>
        <input
          ref={this.props.refer}
          id={this.props.id}
          type="checkbox"
          className="checkbox"
        ></input>
        <label htmlFor={this.props.id}></label>
      </div>
    );
  }
}

export default MySwitch;
