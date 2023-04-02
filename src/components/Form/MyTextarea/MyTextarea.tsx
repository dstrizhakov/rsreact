import { FC } from 'react';
import { IInputProps } from 'types/Types';
import './MyTextarea.scss';

const MyTextarea: FC<IInputProps> = ({ register, errors }) => {
  return (
    <div className={errors?.text ? 'textarea error' : 'textarea'}>
      <label htmlFor="text">Description:</label>
      <textarea
        data-testid="text"
        id="text"
        {...register('text', {
          required: 'Enter details...',
          minLength: {
            value: 10,
            message: 'Min length is 10 symbols...',
          },
          maxLength: {
            value: 200,
            message: 'Max length is 200 symbols...',
          },
        })}
      />
      {errors?.text && <span>{errors?.text?.message || 'Error'}</span>}
    </div>
  );
};

export default MyTextarea;
