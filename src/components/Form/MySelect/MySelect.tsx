import { FC } from 'react';
import { IInputProps } from 'types/Types';
import '../MyInput/MyInput';

const MySelect: FC<IInputProps> = ({ register, errors }) => {
  return (
    <div className={errors?.type ? 'input error' : 'input'}>
      <label htmlFor="type">Select type:</label>
      <select
        id="type"
        {...register('type', {
          required: 'Select some type...',
        })}
      >
        <option selected value=""></option>
        <option value="Oil on canvas">Oil on canvas</option>
        <option value="Acrylic on canvas">Acrylic on canvas</option>
        <option value="Watercolor">Watercolor</option>
        <option value="Oil on cardboard">Oil on cardboard</option>
        <option value="Acrylic on cardboard">Acrylic on cardboard</option>
      </select>
      {errors?.type && <span>{errors?.type?.message || 'Error'}</span>}
    </div>
  );
};

export default MySelect;
