import { ERROR_MESSAGE } from '../../../constants/Constants';
import { FC } from 'react';
import { IInputProps } from 'types/Types';
import './MyTextarea.scss';
import { useFormContext } from 'react-hook-form';

const MyTextarea: FC<IInputProps> = ({ title, name, minLength, maxLength }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className={errors?.text ? 'textarea error' : 'textarea'}>
      <label htmlFor={name}>{title}</label>
      <textarea
        data-testid={name}
        id={name}
        {...register(name, {
          required: ERROR_MESSAGE.DETAILS.REQUIRED,
          minLength: {
            value: minLength || 0,
            message: ERROR_MESSAGE.DETAILS.MIN,
          },
          maxLength: {
            value: maxLength || 500,
            message: ERROR_MESSAGE.DETAILS.MAX,
          },
        })}
      />
      <span>{errors[name] && `${errors[name]?.message || ERROR_MESSAGE.DEFAULT}`}</span>
    </div>
  );
};

export default MyTextarea;
