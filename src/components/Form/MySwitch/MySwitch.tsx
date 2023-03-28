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
      <div className={this.props.isValid ? 'switch' : 'switch error'}>
        <p>{this.props.title}</p>
        <input
          data-testid={this.props.id}
          ref={this.props.refer}
          id={this.props.id}
          type="checkbox"
          className="checkbox"
        ></input>
        <label htmlFor={this.props.id}></label>
        <span>{this.props.error}</span>
      </div>
    );
  }
}

export default MySwitch;
