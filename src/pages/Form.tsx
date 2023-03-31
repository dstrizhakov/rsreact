// import ProductForm from '../components/Form/ProductForm/ProductForm';
import { Component, ReactNode } from 'react';
import ProductHookForm from '../components/Form/ProductForm/ProductHookForm';

class Form extends Component {
  render(): ReactNode {
    return (
      <div>
        <h1>Form</h1>
        {/* <ProductForm /> */}
        <ProductHookForm />
      </div>
    );
  }
}

export default Form;
