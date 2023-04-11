import { ERROR_MESSAGE } from '../../../constants/Constants';
import { FC } from 'react';
import '../MyInput/MyInput.scss';
import { useFormContext } from 'react-hook-form';

interface ISelectProps {
  title: string;
  name: string;
  options?: string[];
}

const MySelect: FC<ISelectProps> = ({ title, name, options }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className={errors?.type ? 'input error' : 'input'}>
      <label htmlFor={name}>{title}</label>
      <select
        data-testid={name}
        id={name}
        {...register(name, {
          required: ERROR_MESSAGE.SELECT.REQUIRED,
        })}
      >
        <option defaultValue="default" hidden></option>
        {options?.map((elem) => (
          <option key={elem} value={elem}>
            {elem}
          </option>
        ))}
      </select>
      <span>{errors[name] && `${errors[name]?.message || ERROR_MESSAGE.DEFAULT}`}</span>
    </div>
  );
};

export default MySelect;
