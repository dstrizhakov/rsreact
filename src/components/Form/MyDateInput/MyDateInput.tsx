import { FC } from 'react';
import { IInputProps } from 'types/Types';
import { isValidDate } from '../../../utils/formUtils';
import './MyDateInput';

const MyDateInput: FC<IInputProps> = ({ register, errors }) => {
  return (
    <div className={errors?.created ? 'input error' : 'input'}>
      <label htmlFor="created">Created at:</label>
      <input
        data-testid="created"
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
