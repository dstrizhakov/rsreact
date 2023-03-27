import { Component, ReactNode } from 'react';
import './MyTextarea.scss';

interface ITextareaStateProps {
  id: string;
  title: string;
  refer: React.RefObject<HTMLTextAreaElement>;
  error: string;
  isValid: boolean;
}

class MyTextarea extends Component<ITextareaStateProps> {
  render(): ReactNode {
    return (
      <div className={this.props.isValid ? 'textarea' : 'textarea error'}>
        <label htmlFor={this.props.id}>{this.props.title}</label>
        <textarea ref={this.props.refer} id={this.props.id} />
        <span>{this.props.error}</span>
      </div>
    );
  }
}

export default MyTextarea;
