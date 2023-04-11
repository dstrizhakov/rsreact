import { ERROR_MESSAGE } from '../../../constants/Constants';
import { FC } from 'react';
import { IInputProps } from 'types/Types';
import '../MyInput/MyInput.scss';
import { useFormContext } from 'react-hook-form';

const MyFileInput: FC<IInputProps> = ({ title, name }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  function isValidFile(files: FileList) {
    const typeFile = files[0].type;
    if (typeFile === 'image/jpeg' || typeFile === 'image/png') {
      return true;
    }
    return false;
  }
  return (
    <div className={errors?.file ? 'input error' : 'input'}>
      <label htmlFor={name}>{title}</label>
      <input
        data-testid={name}
        id={name}
        type={name}
        accept="image/*"
        {...register(name, {
          required: ERROR_MESSAGE.FILE.REQUIRED,
          validate: (file) => isValidFile(file) || ERROR_MESSAGE.FILE.MESSAGE,
        })}
      />
      <span>{errors[name] && `${errors[name]?.message || ERROR_MESSAGE.DEFAULT}`}</span>
    </div>
  );
};

export default MyFileInput;
