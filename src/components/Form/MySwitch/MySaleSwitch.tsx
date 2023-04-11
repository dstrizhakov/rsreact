import { FC } from 'react';
import { useFormContext } from 'react-hook-form';
import './MySwitch.scss';

const MySaleSwitch: FC = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

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
    </div>
  );
};

export default MySaleSwitch;
