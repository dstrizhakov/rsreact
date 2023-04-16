import { ERROR_MESSAGE } from '../../../constants/Constants';
import { FC } from 'react';
import { isValidDate } from '../../../utils/formUtils';
import '../MyInput/MyInput.scss';
import { useFormContext } from 'react-hook-form';
import { IInputProps } from 'types/Types';

const MyDateInput: FC<IInputProps> = ({ title, name }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className={errors?.created ? 'input error' : 'input'}>
      <label htmlFor={name}>{title}</label>
      <input
        data-testid={name}
        id={name}
        type="date"
        {...register(name, {
          required: ERROR_MESSAGE.REQUIRED,
          validate: (date) => isValidDate(date) || ERROR_MESSAGE.DATE.MESSAGE,
        })}
      />
      <span>{errors[name] && `${errors[name]?.message || ERROR_MESSAGE.DEFAULT}`}</span>
    </div>
  );
};

export default MyDateInput;
