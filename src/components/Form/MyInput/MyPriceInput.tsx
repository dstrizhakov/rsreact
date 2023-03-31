import { FC } from 'react';
import { IInputProps } from 'types/Types';
import './MyInput.scss';

const MyPriceInput: FC<IInputProps> = ({ register, errors }) => {
  return (
    <div className={errors?.price ? 'input error' : 'input'}>
      <label htmlFor="price">Enter price:</label>
      <input
        id="price"
        type="text"
        {...register('price', {
          required: 'Enter correct price...',
          pattern: {
            value: /^[0-9]*[.,]?[0-9]+$/,
            message: 'Only numers accepted...',
          },
        })}
      />
      {errors?.price && <span>{errors?.price?.message || 'Error'}</span>}
    </div>
  );
};

export default MyPriceInput;
