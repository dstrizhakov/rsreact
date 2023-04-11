import ProductListContainer from '../containers/ProductListContainer/ProductListContainer';
import { Component, ReactNode } from 'react';
import ProductHookForm from '../components/Form/ProductForm/ProductHookForm';

class Form extends Component {
  render(): ReactNode {
    return (
      <div>
        <h1>Form</h1>
        <ProductHookForm />
        <ProductListContainer />
      </div>
    );
  }
}

export default Form;
