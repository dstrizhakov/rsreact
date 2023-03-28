import { Component, ReactNode } from 'react';
import styles from './ProductForm.module.scss';
import { IProduct } from 'types/Types';
import React from 'react';
import MyInput from '../MyInput/MyInput';
import MyTextarea from '../MyTextarea/MyTextarea';
import ProductList from '../../ProductList/ProductList';
import MyDateInput from '../MyDateInput/MyDateInput';
import MySelect from '../MySelect/MySelect';
import MyFileInput from '../MyFileInput/MyFileInput';
import MySwitch from '../MySwitch/MySwitch';

type ProductFormState = {
  validation: {
    title: boolean;
    description: boolean;
    created: boolean;
    type: boolean;
    image: boolean;
    price: boolean;
    isAvailable: boolean;
    isSale: boolean;
  };
  products: IProduct[] | [];
};

class ProductForm extends Component<object, ProductFormState> {
  constructor() {
    super({});
    this.state = {
      validation: {
        title: true,
        description: true,
        created: true,
        type: true,
        image: true,
        price: true,
        isAvailable: true,
        isSale: true,
      },
      products: [],
    };
    this.titleInput = React.createRef();
    this.textInput = React.createRef();
    this.dateInput = React.createRef();
    this.typeInput = React.createRef();
    this.fileInput = React.createRef();
    this.priceInput = React.createRef();
    this.availInput = React.createRef();
    this.saleInput = React.createRef();
    this.onSubmit = this.onSubmit.bind(this);
  }
  private titleInput: React.RefObject<HTMLInputElement>;
  private textInput: React.RefObject<HTMLTextAreaElement>;
  private dateInput: React.RefObject<HTMLInputElement>;
  private typeInput: React.RefObject<HTMLSelectElement>;
  private fileInput: React.RefObject<HTMLInputElement>;
  private priceInput: React.RefObject<HTMLInputElement>;
  private availInput: React.RefObject<HTMLInputElement>;
  private saleInput: React.RefObject<HTMLInputElement>;

  getRandomInt(): number {
    return Math.floor(Math.random() * 1000);
  }
  resetValidation(): void {
    this.setState((prevState) => ({
      validation: {
        ...prevState.validation,
        description: true,
        title: true,
        created: true,
        type: true,
        image: true,
        price: true,
        isAvailable: true,
        isSale: true,
      },
    }));
  }
  validate(product: IProduct): boolean {
    this.resetValidation();
    if (product.title ? product.title?.length < 3 : true) {
      this.setState((prevState) => ({
        validation: {
          ...prevState.validation,
          title: false,
        },
      }));
      return false;
    }
    if (product.text ? product.text?.length < 10 : true) {
      this.setState((prevState) => ({
        validation: {
          ...prevState.validation,
          description: false,
        },
      }));
      return false;
    }
    if (product.price ? product.price?.length < 1 : true) {
      this.setState((prevState) => ({
        validation: {
          ...prevState.validation,
          price: false,
        },
      }));
      return false;
    }
    if (product.created ? product.created?.length < 3 : true) {
      this.setState((prevState) => ({
        validation: {
          ...prevState.validation,
          created: false,
        },
      }));
      return false;
    }
    if (product.image ? product.image?.length < 3 : true) {
      console.log(product.image);
      this.setState((prevState) => ({
        validation: {
          ...prevState.validation,
          image: false,
        },
      }));
      return false;
    }
    if (!product.isAvailable) {
      this.setState((prevState) => ({
        validation: {
          ...prevState.validation,
          isAvailable: false,
        },
      }));
      return false;
    }
    return true;
  }
  clearForm(): void {
    this.titleInput.current ? (this.titleInput.current.value = '') : null;
    this.textInput.current ? (this.textInput.current.value = '') : null;
    this.priceInput.current ? (this.priceInput.current.value = '') : null;
    this.dateInput.current ? (this.dateInput.current.value = '') : null;
    this.fileInput.current ? (this.fileInput.current.value = '') : null;
  }

  onSubmit(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    const product = {
      id: Date.now().toString(),
      image: this.fileInput.current?.files?.length
        ? URL.createObjectURL(this.fileInput.current?.files['0'])
        : '',
      title: this.titleInput.current?.value || '',
      text: this.textInput.current?.value || '',
      created: this.dateInput.current?.value || '',
      type: this.typeInput.current?.value || '',
      price: this.priceInput.current?.value || '',
      isAvailable: this.availInput.current?.checked,
      isSale: this.saleInput.current?.checked || false,
    };

    if (!this.validate(product)) {
      return;
    }

    const tempProductsState = [...this.state.products];
    tempProductsState.push(product);
    this.setState({ products: tempProductsState });
    this.clearForm();
  }
  render(): ReactNode {
    return (
      <div className={styles.wrapper}>
        <div className={styles.body}>
          <form onSubmit={this.onSubmit} className={styles.form}>
            <MyInput
              title="Item title:"
              id="title"
              error="Title must be more than 3 characters!"
              refer={this.titleInput}
              isValid={this.state.validation.title}
            />
            <MyTextarea
              title="Item description:"
              id="description"
              error="Title must be more than 10 characters!"
              refer={this.textInput}
              isValid={this.state.validation.description}
            />
            <div className={styles.row}>
              <MyDateInput
                title="Created date:"
                id="date"
                error="Error!"
                refer={this.dateInput}
                isValid={this.state.validation.created}
              />
              <MySelect
                title="Type:"
                id="type"
                error="Error!"
                refer={this.typeInput}
                isValid={this.state.validation.type}
              />
            </div>
            <MyFileInput
              title="File:"
              id="File"
              error="Error!"
              refer={this.fileInput}
              isValid={this.state.validation.image}
            />
            <div className={styles.row}>
              <MyInput
                title="Item price:"
                id="price"
                error="Error!"
                refer={this.priceInput}
                isValid={this.state.validation.price}
              />
              <div className={styles.switches}>
                <MySwitch
                  title="Available:"
                  id="availability"
                  error="It should be available!"
                  refer={this.availInput}
                  isValid={this.state.validation.isAvailable}
                />
                <MySwitch
                  title="Sale:"
                  id="sale"
                  error="Error!"
                  refer={this.saleInput}
                  isValid={this.state.validation.isSale}
                />
              </div>
            </div>
            <button>Create</button>
          </form>
        </div>
        <div className="cards">
          <ProductList products={this.state.products} />
        </div>
      </div>
    );
  }
}

export default ProductForm;
