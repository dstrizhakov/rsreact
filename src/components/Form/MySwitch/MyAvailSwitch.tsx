import { FC } from 'react';
import { IInputProps } from 'types/Types';
import './MySwitch.scss';

const MyAvailSwitch: FC<IInputProps> = ({ register, errors }) => {
  return (
    <div className={errors?.isAvailable ? 'switch error' : 'switch'}>
      <p>Is Available</p>
      <input
        data-testid="isAvailable"
        id="isAvailable"
        type="checkbox"
        className="checkbox"
        {...register('isAvailable', {
          required: 'Product should be avail',
        })}
      ></input>
      <label htmlFor="isAvailable"></label>
      {errors?.isAvailable && <span>{errors?.isAvailable?.message || 'Error'}</span>}
    </div>
  );
};

export default MyAvailSwitch;
