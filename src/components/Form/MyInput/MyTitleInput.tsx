import { FC } from 'react';
import { IInputProps } from 'types/Types';
import './MyInput.scss';

const MyTitleInput: FC<IInputProps> = ({ register, errors }) => {
  return (
    <div className={errors?.title ? 'input error' : 'input'}>
      <label htmlFor="title">Enter title:</label>
      <input
        data-testid="title"
        id="title"
        type="text"
        {...register('title', {
          required: 'Enter title',
          minLength: {
            value: 3,
            message: 'Lenght should be at least 3',
          },
          maxLength: {
            value: 50,
            message: 'Max length is 50 symbols...',
          },
          pattern: {
            value: /^[\w-]+$/,
            message: 'Letters, numbers and dash only are allowed',
          },
        })}
      />
      {errors?.title && <span>{errors?.title?.message || 'Error'}</span>}
    </div>
  );
};

export default MyTitleInput;
