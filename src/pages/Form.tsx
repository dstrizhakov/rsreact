import ProductForm from '../components/ProductForm';
import { Component, ReactNode } from 'react';

class Form extends Component {
  render(): ReactNode {
    return (
      <div>
        <h1>Form</h1>
        <ProductForm />
      </div>
    );
  }
}

export default Form;
