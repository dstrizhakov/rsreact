import { Component, ReactNode } from 'react';
import '../MyInput/MyInput';

export interface ISelectStateProps {
  id: string;
  title: string;
  refer: React.RefObject<HTMLSelectElement>;
  error: string;
  isValid: boolean;
}

class MySelect extends Component<ISelectStateProps> {
  render(): ReactNode {
    return (
      <div className={this.props.isValid ? 'input' : 'input error'}>
        <label htmlFor={this.props.id}>{this.props.title}</label>
        <select ref={this.props.refer} id={this.props.id}>
          <option value="Oil on canvas">Oil on canvas</option>
          <option value="Acrylic on canvas">Acrylic on canvas</option>
          <option value="Watercolor">Watercolor</option>
          <option value="Oil on cardboard">Oil on cardboard</option>
          <option value="Acrylic on cardboard">Acrylic on cardboard</option>
        </select>
        <span>{this.props.error}</span>
      </div>
    );
  }
}

export default MySelect;
