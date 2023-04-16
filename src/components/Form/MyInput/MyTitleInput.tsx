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

const MyTitleInput: FC<IInputProps> = ({ title, name, minLength, maxLength, regexp }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className={errors?.title ? 'input error' : 'input'}>
      <label htmlFor={name}>{title}</label>
      <input
        data-testid={name}
        id={name}
        type={name}
        {...register(name, {
          required: ERROR_MESSAGE.TITLE.REQUIRED,
          minLength: {
            value: minLength || 0,
            message: ERROR_MESSAGE.TITLE.MIN,
          },
          maxLength: {
            value: maxLength || 100,
            message: ERROR_MESSAGE.TITLE.MAX,
          },
          pattern: {
            value: regexp || REGEX_ANY,
            message: ERROR_MESSAGE.TITLE.MESSAGE,
          },
        })}
      />
      <span>{errors[name] && `${errors[name]?.message || ERROR_MESSAGE.DEFAULT}`}</span>
    </div>
  );
};

export default MyTitleInput;
