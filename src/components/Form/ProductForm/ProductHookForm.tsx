import { useState } from 'react';
import styles from './ProductForm.module.scss';
import { IForm, IProduct } from 'types/Types';
import MyTextarea from '../MyTextarea/MyTextarea';
import ProductList from '../../ProductList/ProductList';
import MySelect from '../MySelect/MySelect';
import { useForm } from 'react-hook-form';
import MyFileInput from '../MyFileInput/MyFileInput';
import MyDateInput from '../MyDateInput/MyDateInput';
import MyTitleInput from '../MyTitleInput/MyTitleInput';
import MyAvailSwitch from '../MySwitch/MyAvailSwitch';

const ProductHookForm = () => {
  const [products, setProducts] = useState<IProduct[]>([]);

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
    console.log(newProduct);
    newProduct.image = URL.createObjectURL(newProduct.file![0]);
    updateProducts(newProduct);
    // setShowConfirm(true);
    // setTimeout(() => setShowConfirm(false), 2000);
    reset();
  };

  return (
    <div className={styles.wrapper}>
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
            <div className={styles.switches}>
              <MyAvailSwitch register={register} errors={errors} />
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
