import { FC } from 'react';
import { IInputProps } from 'types/Types';
import './MySwitch.scss';

const MySaleSwitch: FC<IInputProps> = ({ register, errors }) => {
  return (
    <div className={errors?.isSale ? 'switch error' : 'switch'}>
      <p>Sale:</p>
      <input
        data-testid="isSale"
        id="isSale"
        type="checkbox"
        className="checkbox"
        {...register('isSale', {})}
      ></input>
      <label htmlFor="isSale"></label>
      {errors?.isSale && <span>{errors?.isSale?.message || 'Error'}</span>}
    </div>
  );
};

export default MySaleSwitch;
