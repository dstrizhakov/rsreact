import { FC } from 'react';
import { IInput } from 'types/Types';
import '../MyTitleInput/MyTitleInput';

const MyDateInput: FC<IInput> = ({ isValid, id, title, refer, error }) => {
  return (
    <div className={isValid ? 'input' : 'input error'}>
      <label htmlFor={id}>{title}</label>
      <input ref={refer} id={id} type="date" />
      <span>{error}</span>
    </div>
  );
};

export default MyDateInput;
