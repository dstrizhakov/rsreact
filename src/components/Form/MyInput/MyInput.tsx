import { Component, ReactNode } from 'react';
import './MyInput.scss';

export interface IInputStateProps {
  id: string;
  title: string;
  refer: React.RefObject<HTMLInputElement>;
  error: string;
  isValid: boolean;
}

class MyInput extends Component<IInputStateProps> {
  render(): ReactNode {
    return (
      <div className={this.props.isValid ? 'input' : 'input error'}>
        <label htmlFor={this.props.id}>{this.props.title}</label>
        <input ref={this.props.refer} id={this.props.id} type="text" />
        <span>{this.props.error}</span>
      </div>
    );
  }
}

export default MyInput;
