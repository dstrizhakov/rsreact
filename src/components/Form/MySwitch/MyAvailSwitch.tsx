import { ERROR_MESSAGE } from '../../../constants/Constants';
import { FC } from 'react';
import './MySwitch.scss';
import { useFormContext } from 'react-hook-form';

interface ISwitchProps {
  title: string;
  name: string;
}

const MyAvailSwitch: FC<ISwitchProps> = ({ title, name }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <div className={errors?.isAvailable ? 'switch error' : 'switch'}>
      <p>{title}</p>
      <input
        data-testid={name}
        id={name}
        type="checkbox"
        className="checkbox"
        {...register('isAvailable', {
          required: ERROR_MESSAGE.AVAIL.REQUIRED,
        })}
      ></input>
      <label htmlFor={name}></label>
      <span>{errors[name] && `${errors[name]?.message || ERROR_MESSAGE.DEFAULT}`}</span>
    </div>
  );
};

export default MyAvailSwitch;
