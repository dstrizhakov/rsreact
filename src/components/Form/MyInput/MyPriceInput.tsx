import { ERROR_MESSAGE, REGEX_ANY } from '../../../constants/Constants';
import { FC } from 'react';
import './MyInput.scss';
import { useFormContext } from 'react-hook-form';

interface IInputProps {
  title: string;
  name: string;
  maxLength?: number;
  minLength?: number;
  regexp?: RegExp;
}

const MyPriceInput: FC<IInputProps> = ({ title, name, regexp }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className={errors?.price ? 'input error' : 'input'}>
      <label htmlFor={name}>{title}</label>
      <input
        data-testid={name}
        id={name}
        type="text"
        {...register(name, {
          required: ERROR_MESSAGE.PRICE.REQUIRED,
          pattern: {
            value: regexp || REGEX_ANY,
            message: ERROR_MESSAGE.PRICE.MESSAGE,
          },
        })}
      />
      <span>{errors[name] && `${errors[name]?.message || ERROR_MESSAGE.DEFAULT}`}</span>
    </div>
  );
};

export default MyPriceInput;
