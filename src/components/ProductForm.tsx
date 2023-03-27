import { Component, ReactNode } from 'react';
import styles from './ProductForm.module.scss';
import { IProduct } from 'types/Types';
import React from 'react';
import MyInput from './MyInput';
import MyTextarea from './MyTextarea';
import ProductList from './ProductList';

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
        isSale: false,
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
    this.setState((state) => {
      state.validation.description = true;
    });
    this.setState((state) => {
      state.validation.title = true;
    });
  }
  validate(product: IProduct): boolean {
    this.resetValidation();
    if (product.title ? product.title?.length < 3 : true) {
      this.setState((state) => {
        state.validation.title = false;
      });
      console.log('Validation failed', this.state);
      return false;
    }
    if (product.text ? product.text?.length < 3 : true) {
      this.setState((state) => {
        state.validation.description = false;
      });
      console.log('Validation failed', this.state);
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
      image: this.fileInput.current?.value || 'product01.jpg',
      title: this.titleInput.current?.value || ' ',
      text: this.textInput.current?.value || ' ',
      created: this.dateInput.current?.value || ' ',
      type: this.typeInput.current?.value || ' ',
      price: this.priceInput.current?.value || ' ',
      isAvailable: this.availInput.current?.checked || true,
      isSale: this.saleInput.current?.checked || false,
    };

    if (!this.validate(product)) {
      return;
    }

    const tempProductsState = [...this.state.products];
    tempProductsState.push(product);
    this.setState({ products: tempProductsState });
    console.log(this.state);
    this.clearForm();
  }
  render(): ReactNode {
    return (
      <>
        <div className={styles.body}>
          <form onSubmit={this.onSubmit} className={styles.form}>
            <MyInput
              title="Item title:"
              id="title"
              error="Some Error!"
              refer={this.titleInput}
              isValid={this.state.validation.title}
            />
            <MyTextarea
              title="Item description:"
              id="description"
              error="Error!"
              refer={this.textInput}
              isValid={this.state.validation.description}
            />
            <div className={styles.row}>
              <div className={styles.input}>
                <label htmlFor="created">Created date:</label>
                <input ref={this.dateInput} id="created" type="date" required />
                <span>Error. Created date should be not empty.</span>
              </div>
              <div className={styles.input}>
                <label htmlFor="type">Type:</label>
                <select ref={this.typeInput} id="type">
                  <option value="Oil on canvas">Oil on canvas</option>
                  <option value="Acrylic on canvas">Acrylic on canvas</option>
                  <option value="Watercolor">Watercolor</option>
                  <option value="Oil on cardboard">Oil on cardboard</option>
                  <option value="Acrylic on cardboard">Acrylic on cardboard</option>
                </select>
                <span>Error. Search query should be not empty.</span>
              </div>
            </div>
            <div className={styles.input}>
              <label htmlFor="file">File:</label>
              <input ref={this.fileInput} id="file" type="file" />
              <span>Error. You should upload file.</span>
            </div>
            <div className={styles.row}>
              <div className={styles.input}>
                <label htmlFor="price">Item price:</label>
                <input ref={this.priceInput} id="price" type="text" required />
                <span>Error. Price should be not empty.</span>
              </div>
              <div className={styles.switches}>
                <div className={styles.switch}>
                  <p>Available:</p>
                  <input
                    ref={this.availInput}
                    id="availability"
                    type="checkbox"
                    className={styles.checkbox}
                  ></input>
                  <label htmlFor="availability"></label>
                </div>
                <div className={styles.switch}>
                  <p>Sale:</p>
                  <input
                    ref={this.saleInput}
                    id="sale"
                    type="checkbox"
                    className={styles.checkbox}
                  ></input>
                  <label htmlFor="sale"></label>
                </div>
              </div>
            </div>
            <button>Create</button>
          </form>
        </div>
        <div className="cards">
          <ProductList products={this.state.products} />
        </div>
      </>
    );
  }
}

export default ProductForm;
