import { FC } from 'react';
import { IInputProps } from 'types/Types';
import '../MyInput/MyInput';

const MyDateInput: FC<IInputProps> = ({ register, errors }) => {
  function isValidDate(date: string) {
    const createdDate = new Date(date);
    const currentDate = Date.parse(String(new Date()));
    if (currentDate > Date.parse(String(createdDate))) {
      return true;
    }
    return false;
  }
  return (
    <div className={errors?.created ? 'input error' : 'input'}>
      <label htmlFor="created">Created at:</label>
      <input
        id="created"
        type="date"
        {...register('created', {
          required: 'Enter created date...',
          validate: (date) => isValidDate(date) || `Entered date is in the future!`,
        })}
      />
      {errors?.created && <span>{errors?.created?.message || 'Error'}</span>}
    </div>
  );
};

export default MyDateInput;
