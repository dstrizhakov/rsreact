import { FC } from 'react';
import { IInputProps } from 'types/Types';
import './MyTitleInput.scss';

const MyTitleInput: FC<IInputProps> = ({ register, errors }) => {
  return (
    <div className={errors?.title ? 'input error' : 'input'}>
      <label htmlFor="title">Enter title:</label>
      <input
        id="title"
        type="text"
        {...register('title', {
          required: 'Enter title',
          minLength: {
            value: 3,
            message: 'Lenght should be at least 3',
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
