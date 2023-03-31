import { useState } from 'react';
import styles from './ProductForm.module.scss';
import { IForm, IProduct } from 'types/Types';
import MyTextarea from '../MyTextarea/MyTextarea';
import ProductList from '../../ProductList/ProductList';
import MySelect from '../MySelect/MySelect';
import { useForm } from 'react-hook-form';
import MyFileInput from '../MyFileInput/MyFileInput';
import MyDateInput from '../MyDateInput/MyDateInput';
import MyTitleInput from '../MyInput/MyTitleInput';
import MyAvailSwitch from '../MySwitch/MyAvailSwitch';
import MySaleSwitch from '../MySwitch/MySaleSwitch';
import MyPriceInput from '../MyInput/MyPriceInput';
import Modal from '../../Modal/Modal';

const ProductHookForm = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [modal, setModal] = useState(false);

  const updateProducts = (newProduct: IProduct) => {
    const updatedProducts = [...products, newProduct];
    setProducts(updatedProducts);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IForm>({
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
  });

  const onSubmit = (newProduct: IForm) => {
    setModal(true);
    newProduct.image = URL.createObjectURL(newProduct.file![0]);
    updateProducts(newProduct);
    reset();
    setTimeout(() => setModal(false), 1500);
  };

  return (
    <div className={styles.wrapper}>
      {modal && (
        <Modal isOpen={modal} setIsOpen={setModal}>
          <h1>Form submitted!</h1>
        </Modal>
      )}
      <div className={styles.body}>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
          <MyTitleInput register={register} errors={errors} />
          <MyTextarea register={register} errors={errors} />
          <div className={styles.row}>
            <MyDateInput register={register} errors={errors} />
            <MySelect register={register} errors={errors} />
          </div>
          <MyFileInput register={register} errors={errors} />
          <div className={styles.row}>
            <MyPriceInput register={register} errors={errors} />
            <div className={styles.switches}>
              <MyAvailSwitch register={register} errors={errors} />
              <MySaleSwitch register={register} errors={errors} />
            </div>
          </div>
          <button>Create</button>
        </form>
      </div>
      <div className="cards">
        <ProductList products={products} />
      </div>
    </div>
  );
};

export default ProductHookForm;
