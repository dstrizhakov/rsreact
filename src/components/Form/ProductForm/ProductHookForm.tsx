import { useState } from 'react';
import styles from './ProductForm.module.scss';
import { IForm } from 'types/Types';
import MyTextarea from '../MyTextarea/MyTextarea';
import MySelect from '../MySelect/MySelect';
import { FormProvider, useForm } from 'react-hook-form';
import MyFileInput from '../MyFileInput/MyFileInput';
import MyDateInput from '../MyDateInput/MyDateInput';
import MyTitleInput from '../MyInput/MyTitleInput';
import MyAvailSwitch from '../MySwitch/MyAvailSwitch';
import MySaleSwitch from '../MySwitch/MySaleSwitch';
import MyPriceInput from '../MyInput/MyPriceInput';
import Modal from '../../Modal/Modal';
import { useAppDispatch } from '../../../hooks/redux';
import { addProduct } from '../../../store/reducers/Products/products.slice';
import { convertFormProductToProduct } from '../../../utils/formUtils';
import {
  REGEX_ANY,
  REGEX_NAME,
  REGEX_PRICE,
  REGEX_TITLE,
  TYPES,
} from '../../../constants/Constants';

const ProductHookForm = () => {
  const dispatch = useAppDispatch();
  const [modal, setModal] = useState(false);

  const methods = useForm<IForm>({
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
  });

  const onSubmit = (newProduct: IForm) => {
    setModal(true);
    dispatch(addProduct(convertFormProductToProduct(newProduct)));
    methods.reset();
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
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)} className={styles.form}>
            <MyTitleInput
              title="Enter title:"
              name="title"
              regexp={REGEX_TITLE}
              minLength={3}
              maxLength={50}
            />
            <MyTextarea title="Enter description:" name="text" minLength={10} maxLength={200} />
            <div className={styles.row}>
              <MyDateInput title="Created at:" name="created" />
              <MySelect title="Select type:" name="type" options={TYPES} />
            </div>
            <MyFileInput title="Select image file:" name="file" />
            <div className={styles.row}>
              <MyPriceInput title="Enter price:" name="price" regexp={REGEX_PRICE} />
              <div className={styles.switches}>
                <MyAvailSwitch title="Available:" name="isAvailable" />
                <MySaleSwitch />
              </div>
            </div>
            <button data-testid="form-submit">Create</button>
          </form>
        </FormProvider>
      </div>
    </div>
  );
};

export default ProductHookForm;
